const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// Create a new patient
router.post('/', async (req, res) => {
  try {
    const patient = new Patient(req.body);
    await patient.save();
    res.status(201).json(patient);
  } catch (error) {
    console.error('Error creating patient:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Search patients
router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    const patients = await Patient.find({
      $or: [
        { patientName: { $regex: `.*${q}.*`, $options: 'i' } },
        { phoneNumber: { $regex: `.*${q}.*`, $options: 'i' } },
      ],
    });
    res.json(patients);
  } catch (error) {
    console.error('Error searching patients:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// TODO: Add routes for patient read, update, and delete operations

module.exports = router;