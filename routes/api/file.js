const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');

const File = require('../../models/File');
const User = require('../../models/User');

// @route   GET api/file/me
// @desc    Get my generated files
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const file = await File.findOne({ user: req.user.id }).populate('user', [
      'name',
      'avatar'
    ]);

    if (!file) {
      return res.status(400).json({
        msg: 'No se encontraron expedientes generados por el usuario'
      });
    } else {
      res.json(file);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/file
// @desc    Create or update a file
// @access  Private
router.post(
  '/',
  [
    auth,
    [
      check('header', 'Ingrese el identificador del expediente')
        .not()
        .isEmpty(),
      check('name', 'Ingrese el nombre de la propiedad')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {
      const {
        header,
        name,
        kind,
        initiator,
        location,
        department,
        category,
        deposit,
        extract,
        area,
        unity,
        address,
        propertyAddress,
        start,
        end
      } = req.body;

      //Build file onject
      const fileFields = {};
      fileFields.user = req.user.id;
      if (header) fileFields.header = header;
      if (name) fileFields.name = name;
      if (kind) fileFields.kind = kind;
      if (initiator) fileFields.initiator = initiator;
      if (location) fileFields.location = location;
      if (department) fileFields.department = department;
      if (category) fileFields.category = category;
      if (deposit) fileFields.deposit = deposit;
      if (extract) {
        fileFields.extract = extract.split(',').map(extract => extract.trim());
      }
      if (area) fileFields.area = area;
      if (unity) fileFields.unity = unity;
      if (address) fileFields.address = address;
      if (propertyAddress) fileFields.propertyAddress = propertyAddress;
      if (start) fileFields.start = new Date(start);
      if (end) fileFields.end = new Date(end);

      try {
        let file = await File.findOne({ header: fileFields.header });
        if (file) {
          //Update
          //console.log('Quiere actualizar');
          //file = await File.findOneAndUpdate(
          //  { user: req.user.id },
          //  { $set: fileFields },
          //  { new: true }
          //);

          //return res.json(file);
          return res.status(400).json({
            errors: [{ msg: 'El expediente ya se encuentra registrado' }]
          });
        } else {
          //Create
          file = new File(fileFields);
          await file.save();
          let files = await File.find();
          res.json(files);
        }
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
      }
    }
  }
);

// @route   GET api/file
// @desc    Get all files
// @access  Public
router.get('/', async (req, res) => {
  try {
    const files = await File.find()
      .populate('user', ['name'])
      .populate('canon');
    //console.log(files);
    res.json(files);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET api/file/:id
// @desc    Get all files by user ID
// @access  Public
router.get('/:id', auth, async (req, res) => {
  try {
    const file = await File.findById(req.params.id)
      .populate('user', ['name'])
      .populate({
        path: 'provision',
        options: { sort: { provisionDate: -1 } }
      })
      .populate({
        path: 'canon',
        match: { status: 'Abonado' },
        options: { sort: { date: -1 } },
        sort: { 'canon.code': 1 }
      })
      .populate({
        path: 'roadmap',
        match: { stateRoadmap: 'Abonado' },
        options: { sort: { dateRoadmap: -1 } }
      })
      .populate({
        path: 'production',
        match: { stateProduction: 'Abonado' },
        options: { sort: ({ year: -1 }, { month: -1 }) }
      });

    if (!file)
      return res.status(400).json({
        msg: 'No se ha encontrado el expediente.'
      });
    res.json(file);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({
        msg: 'No se ha encontrado el expediente.'
      });
    }
    res.status(500).send('Server Error');
  }
});

module.exports = router;
