import React, { useState } from 'react';
import { Grid, TextField, Button, Divider, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import axios from 'axios';

const PatientForm = () => {
  const [patientData, setPatientData] = useState({
    patientId: '',
    patientName: '',
    location: '',
    age: '',
    phoneNumber: '',
    address: '',
    prescription: '',
    dose: '',
    visitDate: null,
    nextVisit: null,
    physicianId: '',
    physicianName: '',
    physicianPhoneNumber: '',
    bill: '',
  });

  const handleChange = (e) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
    validateField(e.target.name, e.target.value);
  };

  const handleDateChange = (field, value) => {
    setPatientData({ ...patientData, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/patients', patientData);
      // Clear form fields after successful submission
      setPatientData({
        patientId: '',
        patientName: '',
        location: '',
        age: '',
        phoneNumber: '',
        address: '',
        prescription: '',
        dose: '',
        visitDate: null,
        nextVisit: null,
        physicianId: '',
        physicianName: '',
        physicianPhoneNumber: '',
        bill: '',
      });
    } catch (error) {
      console.error('Error submitting patient data:', error);
    }
  };

  const generatePatientId = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/patients');
      const patients = response.data;
      const maxId = patients.reduce((max, patient) => {
        const id = parseInt(patient.patientId);
        return id > max ? id : max;
      }, 0);
      const nextId = maxId + 1;
      setPatientData({ ...patientData, patientId: nextId.toString() });
    } catch (error) {
      console.error('Error generating patient ID:', error);
    }
  };

  const [validationErrors, setValidationErrors] = useState({
    patientName: '',
    phoneNumber: '',
    physicianName: '',
    physicianPhoneNumber: '',
    age: '',
    location: '',
    address: '',
    prescription: '',
    dose: '',
    physicianId: '',
    bill: '',
  });

  const validateField = (fieldName, value) => {
    let errorMessage = '';

    switch (fieldName) {
      case 'patientName':
        if (!/^[a-zA-Z ]+$/.test(value)) {
          errorMessage = 'Name should only contain alphabets';
        }
        break;
      case 'phoneNumber':
        if (!/^[0-9+()\\-\\s]+$/.test(value)) {
          errorMessage = 'Phone number should only contain numbers, +, -, or parentheses';
        }
        break;
      case 'physicianPhoneNumber':
        if (!/^[0-9+()\\-\\s]+$/.test(value)) {
          errorMessage = 'Phone number should only contain numbers, +, -, or parentheses';
        }
        break;
      case 'physicianName':
        if (!/^[a-zA-Z ]+$/.test(value)) {
          errorMessage = 'Name should only contain alphabets';
        }
        break;
      case 'age':
        if (!/^[0-9]+(\.[0-9]+)?$/.test(value) || parseFloat(value) <= 0) {
          errorMessage = 'Age should be a positive number';
        }
        break;
      default:
        break;
    }

    setValidationErrors({ ...validationErrors, [fieldName]: errorMessage });
  };

  return (
    <form onSubmit={handleSubmit}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Patient Details</Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={1} alignItems="center">
              <Grid item xs={10}>
                <TextField
                  label="Patient ID"
                  name="patientId"
                  value={patientData.patientId}
                  onChange={handleChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" onClick={generatePatientId}>
                  Generate ID
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Patient Name"
              name="patientName"
              value={patientData.patientName}
              onChange={handleChange}
              fullWidth
              error={Boolean(validationErrors.patientName)}
              helperText={validationErrors.patientName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Location"
              name="location"
              value={patientData.location}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Age"
              name="age"
              value={patientData.age}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={patientData.phoneNumber}
              onChange={handleChange}
              fullWidth
              error={Boolean(validationErrors.phoneNumber)}
              helperText={validationErrors.phoneNumber}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Address"
              name="address"
              value={patientData.address}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Prescription Details</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Prescription"
              name="prescription"
              value={patientData.prescription}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Dose"
              name="dose"
              value={patientData.dose}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <DatePicker
              label="Visit Date"
              name="visitDate"
              value={patientData.visitDate}
              onChange={(value) => handleDateChange('visitDate', value)}
              // renderInput={(params) => <TextField {...params} fullWidth 
              // https://mui.com/x/migration/migration-pickers-v5/#input-renderer-required-in-v5
              slotProps={{ textField: { variant: 'outlined' } }}
            />
          </Grid>
          <Grid item xs={12}>
            <DatePicker
              label="Next Visit"
              name="nextVisit"
              value={patientData.nextVisit}
              onChange={(value) => handleDateChange('nextVisit', value)}
              slotProps={{ textField: { variant: 'outlined' } }}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Physician Details</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Physician ID"
              name="physicianId"
              value={patientData.physicianId}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Physician Name"
              name="physicianName"
              value={patientData.physicianName}
              onChange={handleChange}
              fullWidth
              error={Boolean(validationErrors.physicianName)}
              helperText={validationErrors.physicianName}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Physician Phone Number"
              name="physicianPhoneNumber"
              value={patientData.physicianPhoneNumber}
              onChange={handleChange}
              fullWidth
              error={Boolean(validationErrors.physicianPhoneNumber)}
              helperText={validationErrors.physicianPhoneNumber}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Bill"
              name="bill"
              value={patientData.bill}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </form>
  );
};

export default PatientForm;