const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  patientId: String,
  patientName: String,
  location: String,
  age: Number,
  phoneNumber: String,
  address: String,
  prescription: String,
  dose: String,
  visitDate: Date,
  nextVisit: Date,
  physicianId: String,
  physicianName: String,
  physicianPhoneNumber: String,
  bill: Number,
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;