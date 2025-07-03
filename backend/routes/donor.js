const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/:id', async (req, res) => {
  const donor = await db.getDonorById(req.params.id);
  res.json(donor);
});

router.post('/:id/update', async (req, res) => {
  const updated = await db.updateDonorAvailability(req.params.id, req.body.available);
  res.json({ available: updated });
});

module.exports = router;
