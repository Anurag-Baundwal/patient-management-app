import React, { useState } from 'react';
import { Grid, TextField, Button, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const SearchPatient = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/patients/search?q=${searchQuery}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching patients:', error);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="Search Patients"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Grid>
      {searchResults.length > 0 ? (
        searchResults.map((patient) => (
          <Grid item xs={12} key={patient._id}>
            <Typography variant="h6">Patient Details</Typography>
            <Typography>Patient ID: {patient.patientId || 'null'}</Typography>
            <Typography>Patient Name: {patient.patientName || 'null'}</Typography>
            <Typography>Age: {patient.age || 'null'}</Typography>
            <Typography>Phone Number: {patient.phoneNumber || 'null'}</Typography>
            <Typography>Address: {patient.address || 'null'}</Typography>
            <Divider />
            <Typography variant="h6">Prescription</Typography>
            <Typography>Prescription: {patient.prescription || 'null'}</Typography>
            <Typography>Dose: {patient.dose || 'null'}</Typography>
            <Typography>Visit Date: {patient.visitDate ? new Date(patient.visitDate).toLocaleDateString() : 'null'}</Typography>
            <Typography>Next Visit: {patient.nextVisit ? new Date(patient.nextVisit).toLocaleDateString() : 'null'}</Typography>
            <Divider />
            <Typography variant="h6">Physician</Typography>
            <Typography>Physician ID: {patient.physicianId || 'null'}</Typography>
            <Typography>Physician Name: {patient.physicianName || 'null'}</Typography>
            <Typography>Physician Phone: {patient.physicianPhoneNumber || 'null'}</Typography>
            <Typography>Bill: {patient.bill || 'null'}</Typography>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Typography>No search results found.</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default SearchPatient;