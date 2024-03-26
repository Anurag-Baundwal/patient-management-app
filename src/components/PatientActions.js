import React from 'react';
import { Grid, Button } from '@mui/material';

const PatientActions = ({ onAddPatient, onSearchPatient }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button variant="contained" onClick={onAddPatient}>
          Add Patient
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={onSearchPatient}>
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default PatientActions;