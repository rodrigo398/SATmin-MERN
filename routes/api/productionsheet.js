const express = require('express');
const path = require('path');
var fs = require('fs');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Production = require('../../models/Production');
const File = require('../../models/File');

// @route   POST api/roadmap
// @desc    Create new roadmap
// @access  Private
router.post('/:id', [auth], async (req, res) => {
  try {
    let productionRaw = [];
    let productionElaborate = [];
    let file = await File.findById({ _id: req.params.id });
    /********Production in Raw*********/
    if (file.extract[0]) {
      let value = {
        item: file.extract[0],
        production: req.body.bruto_uno,
        medida_bruto_uno: req.body.medida_bruto_uno
      };
      productionRaw.push(value);
    }
    if (file.extract[1]) {
      let value = {
        item: file.extract[1],
        production: req.body.bruto_dos,
        medida_bruto_uno: req.body.medida_bruto_dos
      };
      productionRaw.push(value);
    }
    if (file.extract[2]) {
      let value = {
        item: file.extract[2],
        production: req.body.bruto_tres,
        medida_bruto_uno: req.body.medida_bruto_tres
      };
      productionRaw.push(value);
    }
    if (file.extract[3]) {
      let value = {
        item: file.extract[3],
        production: req.body.bruto_cuatro,
        medida_bruto_uno: req.body.medida_bruto_cuatro
      };
      productionRaw.push(value);
    }

    /********Production in Elab*********/
    if (file.extract[0]) {
      let value = {
        item: file.extract[0],
        production: req.body.elab_uno,
        medida_elaborate: req.body.medida_elaborado_uno
      };
      productionElaborate.push(value);
    }
    if (file.extract[1]) {
      let value = {
        item: file.extract[1],
        production: req.body.elab_dos,
        medida_elaborate: req.body.medida_elaborado_dos
      };
      productionElaborate.push(value);
    }
    if (file.extract[2]) {
      let value = {
        item: file.extract[2],
        production: req.body.elab_tres,
        medida_elaborate: req.body.medida_elaborado_tres
      };
      productionElaborate.push(value);
    }
    if (file.extract[3]) {
      let value = {
        item: file.extract[3],
        production: req.body.elab_cuatro,
        medida_elaborate: req.body.medida_elaborado_cuatro
      };
      productionElaborate.push(value);
    }
    const {
      roadmap,
      personal,
      accidents,
      accidents_per_month,
      accidents_day,
      incapacity
    } = req.body;

    const productionFields = {};
    productionFields.user = req.user.id;
    productionFields.file = req.params.id;
    productionFields.month = 01;
    productionFields.year = 2020;
    if (roadmap) productionFields.roadmap = roadmap;
    if (personal) productionFields.personal = personal;
    if (accidents) productionFields.accidents = accidents;
    if (accidents_per_month)
      productionFields.accidents_per_month = accidents_per_month;
    if (accidents_day) productionFields.accidents_day = accidents_day;
    if (incapacity) productionFields.incapacity = incapacity;
    productionFields.productionRaw = productionRaw;
    productionFields.productionElaborate = productionElaborate;
    productionFields.stateProduction = Date.now();
    production = new Production(productionFields);
    await production.save();
    res.json(production);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
