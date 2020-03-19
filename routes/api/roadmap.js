const express = require('express');
const path = require('path');
var fs = require('fs');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const RoadmapApproved = require('../../controllers/RoadmapApproved');
const Roadmap = require('../../models/Roadmap');
const File = require('../../models/File');
const RoadmapTicket = require('../../models/RoadmapTicket');
const RoadmapTriple = require('../../controllers/RoadMapTriple');
const RoadMapCuadruple = require('../../controllers/RoadMapCuadruple');
const RoadmapTicketPDF = require('../../controllers/RoadmapTicket');

// @route   POST api/roadmap
// @desc    Create new roadmap
// @access  Private
router.post('/:id', [auth], async (req, res) => {
  try {
    const { numberRoadmap } = req.body;
    let amountRoadmap = 0;
    let file = await File.findById({ _id: req.params.id });
    if (file.category === 'Áridos') {
      amountRoadmap = numberRoadmap * 10;
    }
    if (file.category === 'Laja') {
      amountRoadmap = numberRoadmap * 25;
    }
    if (file.category === 'Yeso') {
      amountRoadmap = numberRoadmap * 40;
    }
    const stateRoadmap = 'Solicitado';
    //Build roadmap object
    const roadmapFields = {};
    roadmapFields.user = req.user.id;
    roadmapFields.file = req.params.id;
    if (numberRoadmap) roadmapFields.numberRoadmap = numberRoadmap;
    if (stateRoadmap) roadmapFields.stateRoadmap = stateRoadmap;
    if (amountRoadmap) roadmapFields.amountRoadmap = amountRoadmap;
    roadmap = new Roadmap(roadmapFields);
    await roadmap.save();
    res.json(roadmap);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/roadmap/requests/:id
// @desc    Get all the roadmap requests
// @access  Private
router.get('/requests/:id', [auth], async (req, res) => {
  try {
    let roadmap = await Roadmap.find({ file: req.params.id })
      .sort({ dateRoadmap: -1 })
      .populate('file')
      .populate('user')
      .populate({ path: 'roadmapTicket', populate: { path: 'user' } });
    res.json(roadmap);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/roadmap/:id
// @desc    Delete roadmap data by id
// @access  Private
router.delete('/:id', [auth], async (req, res) => {
  try {
    const roadmap = await Roadmap.deleteOne({ _id: req.params.id });
    res.json(roadmap);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/roadmap/approve/:id
// @desc    Approve roadmap request by id
// @access  Private
router.put('/approve/:id', [auth], async (req, res) => {
  try {
    const roadmapAux = await Roadmap.findOne({ _id: req.params.id })
      .populate('file')
      .populate('user');
    const roadmapOrdered = await Roadmap.findOne({
      $and: [
        { file: roadmapAux.file },
        { $or: [{ stateRoadmap: 'Aprobado' }, { stateRoadmap: 'Abonado' }] }
      ]
    }).sort({ dateRoadmap: -1 });
    let requestRoadmap = 0;
    if (roadmapOrdered != null) {
      requestRoadmap = roadmapOrdered.requestRoadmap + 1;
    } else {
      requestRoadmap = 1;
    }
    const roadmap = await Roadmap.findOneAndUpdate(
      { _id: req.params.id },
      {
        stateRoadmap: 'Aprobado',
        dateApproveRoadmap: Date.now(),
        requestRoadmap: requestRoadmap
      }
    );
    const absolutePath = path.join(
      __dirname,
      `/../../client/public/solicitudes-hojas-de-ruta-aprobadas/${roadmap.file}`
    );
    const logoPath = path.join(__dirname, `/../../client/public/logo.png`);
    const logoPathHD = path.join(__dirname, `/../../client/public/logo_hd.png`);
    if (!fs.existsSync(absolutePath)) {
      fs.mkdirSync(absolutePath);
    }
    let value = await RoadmapApproved.PDFApproved(
      absolutePath,
      roadmap._id,
      requestRoadmap,
      roadmapAux,
      logoPath,
      logoPathHD
    );
    if (value) res.json(roadmap);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/roadmap/generate-a:id
// @desc    Put roadmap file
// @access  Private
router.put('/generate-a/:id', [auth], async (req, res) => {
  try {
    const roadmap = await Roadmap.findOneAndUpdate(
      { _id: req.params.id },
      {
        roadmapFile: 'Generado-a'
      }
    )
      .populate('file')
      .populate('user');

    const absolutePath = path.join(
      __dirname,
      `/../../client/public/hojas-ruta/Triples/${roadmap.file.name}`
    );
    const logoPath = path.join(__dirname, `/../../client/public/logo.png`);
    const logoPathHD = path.join(__dirname, `/../../client/public/logo_hd.png`);
    const signPath = path.join(
      __dirname,
      `/../../client/public/firmaDirector.png`
    );
    if (!fs.existsSync(absolutePath)) {
      fs.mkdirSync(absolutePath);
    }
    let value = await RoadmapTriple.PDFRoadmap(
      absolutePath,
      roadmap._id,
      roadmap,
      logoPath,
      logoPathHD,
      signPath
    );
    if (value) res.json(roadmap);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/roadmap/generate-b:id
// @desc    PUT roadmap file
// @access  Private
router.put('/generate-b/:id', [auth], async (req, res) => {
  try {
    const roadmap = await Roadmap.findOneAndUpdate(
      { _id: req.params.id },
      {
        roadmapFile: 'Generado-b'
      }
    )
      .populate('file')
      .populate('user');

    const absolutePath = path.join(
      __dirname,
      `/../../client/public/hojas-ruta/Cuadruples/${roadmap.file.name}`
    );
    const logoPath = path.join(__dirname, `/../../client/public/logo.png`);
    const signPath = path.join(
      __dirname,
      `/../../client/public/firmaDirector.png`
    );
    if (!fs.existsSync(absolutePath)) {
      fs.mkdirSync(absolutePath);
    }
    let value = await RoadMapCuadruple.PDFRoadmap(
      absolutePath,
      roadmap._id,
      roadmap,
      logoPath,
      signPath
    );
    if (value) res.json(roadmap);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/roadmap/ticket/:id
// @desc    Roadmap ticket insert
// @access  Private
router.post('/ticket/:id', [auth], async (req, res) => {
  try {
    const { transaction, datePayment, payment } = req.body;
    let datePaymentAux = new Date(datePayment);
    const roadmapTicketFields = {};
    roadmapTicketFields.roadmap = req.params.id;
    roadmapTicketFields.user = req.user.id;
    if (transaction) roadmapTicketFields.transaction = transaction;
    if (datePayment) roadmapTicketFields.datePayment = datePaymentAux;
    if (payment) roadmapTicketFields.payment = payment;
    roadmapTicketFields.status = 'Solicitado';

    let roadmapTicket = new RoadmapTicket(roadmapTicketFields);
    await roadmapTicket.save();
    let roadmap = await Roadmap.findById({ _id: req.params.id }).sort({
      date: -1
    });
    roadmap.roadmapTicket.unshift({ _id: roadmapTicket._id });
    await roadmap.save();
    let roadmapAux = await Roadmap.find({ file: roadmap.file })
      .sort({ dateRoadmap: -1 })
      .populate('file')
      .populate('user')
      .populate({ path: 'roadmapTicket', populate: { path: 'user' } });
    res.json(roadmapAux);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/roadmap/ticket/:id
// @desc    Disapprove roadmap ticket by id
// @access  Private
router.put('/ticket-disapprove/:id', [auth], async (req, res) => {
  try {
    const roadmapTicket = await RoadmapTicket.findOneAndUpdate(
      { _id: req.params.id },
      {
        status: 'Desaprobado',
        actionDate: new Date(),
        userAction: req.user.id
      }
    );
    const roadmapAux = await Roadmap.findById({ _id: roadmapTicket.roadmap });
    let roadmap = await Roadmap.find({ file: roadmapAux.file })
      .sort({ dateRoadmap: -1 })
      .populate('file')
      .populate('user')
      .populate({ path: 'roadmapTicket', populate: { path: 'user' } });
    res.json(roadmap);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/roadmap/ticket/:id
// @desc    Approve roadmap ticket by id
// @access  Private
router.put('/ticket-approve/:id', [auth], async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const roadmapTicket = await RoadmapTicket.findOneAndUpdate(
      { _id: req.params.id },
      {
        status: 'Aprobado',
        actionDate: new Date(),
        userAction: user.name
      }
    ).populate('user');
    const roadmapAux = await Roadmap.findOneAndUpdate(
      { _id: roadmapTicket.roadmap },
      {
        stateRoadmap: 'Abonado'
      }
    );
    const roadmap = await Roadmap.find({ file: roadmapTicket.roadmapFile })
      .sort({ date: -1 })
      .populate('file')
      .populate('user')
      .populate('roadmapTicket');
    const expediente = await File.findById({ _id: roadmapAux.file });
    expediente.roadmap.unshift({ _id: roadmapTicket.roadmap });
    await expediente.save();
    const absolutePath = path.join(
      __dirname,
      `/../../client/public/hojas-ruta-comprobantes-pago/${roadmapAux.file}`
    );
    const logoPath = path.join(__dirname, `/../../client/public/logo.png`);
    const logoPathHD = path.join(__dirname, `/../../client/public/logo_hd.png`);
    if (!fs.existsSync(absolutePath)) {
      fs.mkdirSync(absolutePath);
    }
    const roadmapAux2 = await Roadmap.findOne({ _id: roadmapTicket.roadmap })
      .populate('file')
      .populate('user');
    let value = await RoadmapTicketPDF.PDFroadmapTicket(
      absolutePath,
      roadmapAux2._id,
      roadmapAux2,
      logoPath,
      logoPathHD,
      roadmapTicket,
      user.name
    );
    if (value) res.json(roadmap);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
