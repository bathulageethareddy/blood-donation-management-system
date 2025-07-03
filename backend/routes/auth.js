const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await db.getUserByEmail(email);
  if (user && user.password === password) {
    return res.json(user);
  }
  res.status(401).send('Invalid credentials');
});

router.post('/register', async (req, res) => {
  const { name, email, password, phone, bloodType } = req.body;
  await db.registerDonor({ name, email, password, phone, bloodType });
  res.json({ message: 'Registration successful! Welcome donor!' });
});

module.exports = router;
