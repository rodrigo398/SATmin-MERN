const express = require('express');
var fs = require('fs');
const path = require('path');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const Provision = require('../../models/Provision');
const File = require('../../models/File');

// @route   POST api/provision
// @desc    Create or update a provision
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('provisionHeader', 'Ingrese el identificador de la disposición')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    if (req.files === null) {
      return res.status(400).json({ msg: 'No se ha cargado ningún archivo' });
    }
    const file = req.files.file;
    const absolutePath = path.join(__dirname, '/../../');

    file.mv(
      `${absolutePath}client/public/uploads/Disposiciones/${file.name}`,
      err => {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        } else {
          const {
            provisionHeader,
            provisionType,
            provisionDate,
            provisionFileId
          } = req.body;

          //Build file onject
          const provisionFields = {};
          provisionFields.user = req.user.id;
          provisionFields.file = provisionFileId;
          if (provisionHeader)
            provisionFields.provisionHeader = provisionHeader;
          if (provisionType) provisionFields.provisionType = provisionType;
          if (provisionDate) provisionFields.provisionDate = provisionDate;
          provisionFields.provisionDocument = file.name;
          provision = new Provision(provisionFields);
          provision.save(async function(err, result) {
            if (err) {
              res.status(500).send('Server Error');
            } else {
              res = result._id;
              const expediente = await File.findById({ _id: provisionFileId });
              expediente.provision.unshift({ _id: res });
              await expediente.save();
            }
          });
          res.json({
            fileName: file.name,
            filePath: `${absolutePath}client/public/uploads/${file.name}`
          });
        }
      }
    );
  }
);

/* @route   GET api/provision/:id
// @desc    Get all provisions
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const provisions = await Provision.find();
    //  .populate('user', ['name'])
    //  .populate({
    //    path: 'provision',
    //    options: { sort: { provisionDate: -1 } }
    //  });
    if (!provisions)
      return res.status(400).json({
        msg: 'No se ha encontrado disposiciones.'
      });
    res.json(provisions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
*/
router.get('/', async (req, res) => {
  try {
    const provisions = await Provision.find().populate('file');
    res.json(provisions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const provisions = await Provision.find({ file: req.params.id });
    res.json(provisions);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
