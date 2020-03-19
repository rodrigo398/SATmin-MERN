const express = require('express');
const router = express.Router();
const path = require('path');
var fs = require('fs');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');
const Canon = require('../../models/Canon');
const CanonTicket = require('../../models/CanonTicket');
const File = require('../../models/File');
const User = require('../../models/User');
const CanonDisapproved = require('../../controllers/CanonDisapproved');
const CanonApproved = require('../../controllers/CanonApproved');
const CanonTicketPDF = require('../../controllers/CanonTicket');
const nodemailer = require('nodemailer');

// @route   GET api/canon/ticketRequested
// @desc    Requested canon tickets
// @access  Private
router.get('/ticketRequested', async (req, res) => {
  try {
    const requestedTickets = await Canon.find({
      $and: [{ status: 'Aprobado' }, { waiting: 'Yes' }]
    });
    res.json(requestedTickets);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/canon/requested
// @desc    Requested canons
// @access  Private
router.get('/requested', async (req, res) => {
  try {
    const requestedCanons = await Canon.find({ status: 'Solicitado' }).populate(
      'file'
    );
    res.json(requestedCanons);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/canon/:id
// @desc    Apply for canon payment
// @access  Private
router.post('/:id', [auth], async (req, res) => {
  try {
    const lastCanon = await File.findOne({ _id: req.params.id }).populate({
      path: 'canon',
      match: {
        status: { $in: ['Aprobado', 'Abonado'] }
      },
      options: { sort: { date: -1 } },
      sort: { 'canon.code': 1 }
    });
    //const lastCanon = await Canon.find({ file: req.params.id })
    //.or([{ status: 'Abonado' }, { status: 'Aprobado' }])
    //.limit(1)
    //.sort('-_id'); //Check last Canon payment
    const dateRequest = req.body.dateRequest;
    let date; //Or date from input
    if (dateRequest != '') {
      date = new Date(dateRequest);
    } else {
      date = new Date();
    }
    const endDate = new Date(lastCanon.end);
    let auxMonth = 0;
    let total = 0;
    let monto = 0;
    let multa = 0;
    let lastCanonDate = new Date(lastCanon.start); //Or last year canon
    let lastCanonMonth = lastCanonDate.getMonth();
    if (lastCanon.canon[0] != null) {
      lastCanonDate.setFullYear(lastCanon.canon[0].description[0].year); //Set last year canon
      if (lastCanon.canon[0].description[0].period === 2) {
        auxMonth = 1;
        lastCanonDate.setFullYear(lastCanonDate.getFullYear() + 1);
      } else {
        auxMonth = 2;
      }
    } else {
      if (lastCanon.kind === 'Mina') {
        lastCanonDate.setFullYear(lastCanonDate.getFullYear() + 3);
      }
      if (lastCanonMonth < 6) {
        auxMonth = 1;
      } else {
        auxMonth = 2;
      }
    }
    const { options } = req.body;
    const aux = options.length;
    let descriptionArray = [];

    for (
      let i = 0;
      i < aux && lastCanonDate.getFullYear() <= endDate.getFullYear();
      i++
    ) {
      /* Cálculo 2016 */
      if (
        lastCanon.category === 'Áridos' &&
        lastCanonDate.getFullYear() >= 2016
      ) {
        monto = 1120;
        monto = monto * lastCanon.unity;
      }
      if (
        lastCanon.category === 'Primer' &&
        lastCanonDate.getFullYear() >= 2016
      ) {
        if (lastCanon.deposit === 'Vetiforme') {
          monto = 160;
          monto = monto * lastCanon.unity;
        } else {
          monto = 1600;
          monto = monto * lastCanon.unity;
        }
      }
      if (
        lastCanon.category === 'Laja' &&
        lastCanonDate.getFullYear() >= 2016
      ) {
        monto = 80;
        monto = monto * lastCanon.unity;
      }
      if (
        lastCanon.category === 'Segunda' &&
        lastCanonDate.getFullYear() >= 2016
      ) {
        if (lastCanon.deposit === 'Vetiforme') {
          monto = 80;
          monto = monto * lastCanon.unity;
        } else {
          monto = 800;
          monto = monto * lastCanon.unity;
        }
      }
      /* Cálculo 2014 - 2015 */
      if (
        lastCanon.category === 'Áridos' &&
        (lastCanonDate.getFullYear() === 2015 ||
          lastCanonDate.getFullYear() === 2014)
      ) {
        monto = 240;
        monto = monto * lastCanon.unity;
      }
      if (
        lastCanon.category === 'Primer' &&
        (lastCanonDate.getFullYear() === 2015 ||
          lastCanonDate.getFullYear() === 2014)
      ) {
        if (lastCanon.deposit === 'Vetiforme') {
          monto = 40;
          monto = monto * lastCanon.unity;
        } else {
          monto = 400;
          monto = monto * lastCanon.unity;
        }
      }
      if (
        lastCanon.category === 'Laja' &&
        (lastCanonDate.getFullYear() === 2015 ||
          lastCanonDate.getFullYear() === 2014)
      ) {
        monto = 40;
        monto = monto * lastCanon.unity;
      }
      if (
        lastCanon.category === 'Segunda' &&
        (lastCanonDate.getFullYear() === 2015 ||
          lastCanonDate.getFullYear() === 2014)
      ) {
        if (lastCanon.deposit === 'Vetiforme') {
          monto = 20;
          monto = monto * lastCanon.unity;
        } else {
          monto = 200;
          monto = monto * lastCanon.unity;
        }
      }
      /* Cálculo 2013 */
      if (
        lastCanon.category === 'Áridos' &&
        lastCanonDate.getFullYear() <= 2013
      ) {
        monto = 20;
        monto = monto * lastCanon.unity;
      }
      if (
        lastCanon.category === 'Primer' &&
        lastCanonDate.getFullYear() <= 2013
      ) {
        if (lastCanon.deposit === 'Vetiforme') {
          monto = 10;
          monto = monto * lastCanon.unity;
        } else {
          monto = 100;
          monto = monto * lastCanon.unity;
        }
      }
      if (
        lastCanon.category === 'Laja' &&
        lastCanonDate.getFullYear() <= 2013
      ) {
        monto = 20;
        monto = monto * lastCanon.unity;
      }
      if (
        lastCanon.category === 'Segunda' &&
        lastCanonDate.getFullYear() <= 2013
      ) {
        if (lastCanon.deposit === 'Vetiforme') {
          monto = 5;
          monto = monto * lastCanon.unity;
        } else {
          monto = 50;
          monto = monto * lastCanon.unity;
        }
      }
      let auxiliarYear = lastCanonDate.getFullYear() + 1;
      let yearDiff = (date.getFullYear() - auxiliarYear) * 12;
      if (auxMonth === 1) {
        yearDiff = yearDiff + 6;
      }
      yearDiff = yearDiff + date.getMonth() + 1;
      let auxMulta;
      if (yearDiff >= 14) {
        auxMulta = yearDiff / 14;
        auxMulta = Math.floor(auxMulta);
        multa = (monto * 20) / 100;
        multa = multa * auxMulta;
      } else {
        multa = 0;
      }
      total = total + monto + multa;
      let canonObject = {
        code: i,
        amount: monto,
        tax: multa,
        year: lastCanonDate.getFullYear(),
        period: auxMonth
      };
      descriptionArray.push(canonObject);
      if (endDate.getFullYear() === lastCanonDate.getFullYear()) {
        if (endDate.getMonth() < 6) {
          auxMonth = 3;
        } else {
          if (
            endDate.getFullYear() === lastCanonDate.getFullYear() &&
            auxMonth === 1
          ) {
            auxMonth = 2; //Antes estaba en 3 ?
          } else {
            auxMonth = 3;
          }
        }
      } else {
        auxMonth = auxMonth + 1;
      }
      if (auxMonth === 3) {
        auxMonth = 1;
        lastCanonDate.setFullYear(lastCanonDate.getFullYear() + 1);
      }
    }
    const canonFields = {};
    canonFields.file = req.params.id;
    canonFields.user = req.user.id;
    canonFields.year = date.getFullYear();
    canonFields.total = total;
    canonFields.status = 'Solicitado';
    canonFields.dateRequest = date;
    canon = new Canon(canonFields);
    canon.save(async function(err, result) {
      if (err) {
        res.status(500).send('Server Error');
      }
      let canonDescription = await Canon.findById({ _id: result._id });
      descriptionArray.map(async descriptionObject => {
        canonDescription.description.unshift({
          code: descriptionObject.code,
          period: descriptionObject.period,
          year: descriptionObject.year,
          amount: descriptionObject.amount,
          tax: descriptionObject.tax
        });
      });
      await canonDescription.save();
    });
    res.json(canon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/canon/requests/:id
// @desc    Get all the canon requests
// @access  Private
router.get('/requests/:id', [auth], async (req, res) => {
  try {
    const canon = await Canon.find({ file: req.params.id })
      .sort({ date: -1 })
      .populate('file')
      .populate('user')
      .populate({
        path: 'canonTicket',
        options: { sort: { date: -1 } }
      });
    res.json(canon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/canon/:id
// @desc    Get canon data by id
// @access  Private
router.get('/:id', [auth], async (req, res) => {
  try {
    const canon = await Canon.findOne({ _id: req.params.id })
      .populate('file')
      .populate('user')
      .populate({ path: 'canonTicket', populate: { path: 'user' } });
    res.json(canon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/canon/:id
// @desc    Delete canon data by id
// @access  Private
router.delete('/:id', [auth], async (req, res) => {
  try {
    const canon = await Canon.deleteOne({ _id: req.params.id });
    res.json(canon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/canon/approve/:id
// @desc    Approve canon request by id
// @access  Private
router.put('/approve/:id', [auth], async (req, res) => {
  try {
    const dateRequest = req.body.dateDisapprove;
    let dateDisapprove; //Or date from input
    if (dateRequest != '') {
      dateDisapprove = new Date(dateRequest);
    } else {
      dateDisapprove = new Date();
    }
    const canon = await Canon.findOneAndUpdate(
      { _id: req.params.id },
      {
        status: 'Aprobado',
        comment: req.body.comment,
        dateDisapprove: dateDisapprove
      }
    );
    //const expediente = await File.findById({ _id: canon.file });
    //expediente.canon.unshift({ _id: req.params.id });
    //await expediente.save();

    const absolutePath = path.join(
      __dirname,
      `/../../client/public/solicitudes-canon-aprobadas/${canon.file}`
    );
    const logoPath = path.join(__dirname, `/../../client/public/logo.png`);
    const logoPathHD = path.join(__dirname, `/../../client/public/logo_hd.png`);
    if (!fs.existsSync(absolutePath)) {
      fs.mkdirSync(absolutePath);
    }
    const canonAux = await Canon.findOne({ _id: req.params.id })
      .populate('file')
      .populate('user');

    let value = await CanonApproved.PDFApproved(
      absolutePath,
      canon._id,
      canonAux,
      logoPath,
      logoPathHD
    );
    //sendApproveMail();
    if (value) res.json(canon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/canon/disapprove/:id
// @desc    Approve canon request by id
// @access  Private
router.put('/disapprove/:id', [auth], async (req, res) => {
  try {
    const dateRequest = req.body.dateDisapprove;
    let dateDisapprove; //Or date from input
    if (dateRequest != '') {
      dateDisapprove = new Date(dateRequest);
    } else {
      dateDisapprove = new Date();
    }
    const canon = await Canon.findOneAndUpdate(
      { _id: req.params.id },
      {
        status: 'Desaprobado',
        comment: req.body.comment,
        dateDisapprove: dateDisapprove
      }
    );
    const absolutePath = path.join(
      __dirname,
      `/../../client/public/solicitudes-canon-desaprobadas/${canon.file}`
    );
    const logoPath = path.join(__dirname, `/../../client/public/logo.png`);
    const logoPathHD = path.join(__dirname, `/../../client/public/logo_hd.png`);
    if (!fs.existsSync(absolutePath)) {
      fs.mkdirSync(absolutePath);
    }
    const canonAux = await Canon.findOne({ _id: req.params.id })
      .populate('file')
      .populate('user');
    let value = await CanonDisapproved.PDFDisapproved(
      absolutePath,
      canon._id,
      canonAux,
      logoPath,
      logoPathHD
    );
    if (value) res.json(canon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/canon/requested/:id
// @desc    Requested canon by id
// @access  Private
router.get('/requested/:id', [auth], async (req, res) => {
  try {
    const canon = await Canon.findOne({
      $and: [
        { file: req.params.id },
        { $or: [{ status: 'Solicitado' }, { status: 'Aprobado' }] }
      ]
    });
    res.json(canon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/canon/ticket/:id
// @desc    Canon ticket insert
// @access  Private
router.post('/ticket/:id', [auth], async (req, res) => {
  try {
    const { transaction, datePayment, payment } = req.body;
    let datePaymentAux = new Date(datePayment);
    const canonTicketFields = {};
    canonTicketFields.canon = req.params.id;
    canonTicketFields.user = req.user.id;
    if (transaction) canonTicketFields.transaction = transaction;
    if (datePayment) canonTicketFields.datePayment = datePaymentAux;
    if (payment) canonTicketFields.payment = payment;
    canonTicketFields.status = 'Solicitado';

    let canonTicket = new CanonTicket(canonTicketFields);
    await canonTicket.save();
    let canon = await Canon.findById({ _id: req.params.id });
    canon.canonTicket.unshift({ _id: canonTicket._id });
    await canon.save();
    const canonAux = await Canon.findOneAndUpdate(
      { _id: canonTicket.canon },
      {
        waiting: 'Yes'
      }
    );
    res.json(canon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/canon/ticket/:id
// @desc    Disapprove canon ticket by id
// @access  Private
router.put('/ticket-disapprove/:id', [auth], async (req, res) => {
  try {
    const paymentDate = new Date();
    const canonTicket = await CanonTicket.findOneAndUpdate(
      { _id: req.params.id },
      {
        status: 'Desaprobado',
        actionDate: paymentDate,
        userAction: req.user.id
      }
    );
    const canon = await Canon.find({ file: canonTicket.canon })
      .sort({ date: -1 })
      .populate('file')
      .populate('user')
      .populate('canonTicket');
    res.json(canon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/canon/ticket/:id
// @desc    Approve canon ticket by id
// @access  Private
router.put('/ticket-approve/:id', [auth], async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const paymentDate = new Date();
    const canonTicket = await CanonTicket.findOneAndUpdate(
      { _id: req.params.id },
      {
        status: 'Aprobado',
        actionDate: paymentDate,
        userAction: user.name
      }
    ).populate('user');
    const canonAux = await Canon.findOneAndUpdate(
      { _id: canonTicket.canon },
      {
        status: 'Abonado',
        waiting: 'No'
      }
    );
    const canon = await Canon.find({ file: canonTicket.canon })
      .sort({ date: -1 })
      .populate('file')
      .populate('user')
      .populate('canonTicket');
    const expediente = await File.findById({ _id: canonAux.file });
    expediente.canon.unshift({ _id: canonTicket.canon });
    await expediente.save();
    const absolutePath = path.join(
      __dirname,
      `/../../client/public/canon-comprobantes-pago/${canonAux.file}`
    );
    const logoPath = path.join(__dirname, `/../../client/public/logo.png`);
    const logoPathHD = path.join(__dirname, `/../../client/public/logo_hd.png`);
    if (!fs.existsSync(absolutePath)) {
      fs.mkdirSync(absolutePath);
    }
    const canonAux2 = await Canon.findOne({ _id: canonTicket.canon })
      .populate('file')
      .populate('user');
    let value = await CanonTicketPDF.PDFcanonTicket(
      absolutePath,
      canonAux2._id,
      canonAux2,
      logoPath,
      logoPathHD,
      canonTicket,
      user.name
    );
    if (value) res.json(canon);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

async function sendApproveMail() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: 'in-v3.mailjet.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: '4e3e36fa4151417fdd0474e53f4469fc', // generated ethereal user
      pass: '998c432f6a65b32b772594a34f41f7af' // generated ethereal password
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <mauribarrera23@gmail.com>', // sender address
    to: 'mauribarrera23@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = router;
