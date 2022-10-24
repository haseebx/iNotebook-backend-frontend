const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const router = express.Router();

router.post(
  '/',
  [
    body('name', 'Enter a valied name').isLength({ min: 3 }),
    body('email', 'Enter a valied mail ').isEmail(),
    body('password', 'password must be greater than 5').isLength({ min: 5 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        res.json({ error: 'pleas enter a unique email' });
      });

    /*
  console.log(req.body);
  const user = User(req.body);
  user.save();
  res.send(req.body);*/
  }
);
module.exports = router;
