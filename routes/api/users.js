const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post(
  '/',
  [
    check('name', 'Nombre es un campo obligatorio.')
      .not()
      .isEmpty(),
    check('email', 'Correo Elèctronico es un campo obligatorio.').isEmail(),
    check(
      'password',
      'Por favor, ingrese una contraseña de 6 o màs caracteres.'
    ).isLength({
      min: 6
    }) /*,
    check('role', 'Por favor, asigne el rol del usuario.')
      .not()
      .isEmpty()*/
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password /*, role */ } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({
          errors: [{ msg: 'El usuario ya se encuentra registrado.' }]
        });
      } else {
        const avatar = gravatar.url(email, {
          s: '200',
          r: 'pg',
          d: 'mm'
        });

        user = new User({
          name,
          email,
          password,
          avatar //,
          //role
        });

        const salt = await bcrypt.genSalt(10);

        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
          user: {
            id: user.id,
            role: user.role
          }
        };

        jwt.sign(
          payload,
          config.get('jwtSecret'),
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
      }
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
