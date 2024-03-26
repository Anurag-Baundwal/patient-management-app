import React, { useState } from 'react';
import { Grid, Container } from '@mui/material';
import PatientActions from './components/PatientActions';
import PatientForm from './components/PatientForm';
import SearchPatient from './components/SearchPatient';
import AppTitle from './components/AppTitle';

const App = () => {
  const [showPatientForm, setShowPatientForm] = useState(false);
  const [showSearchPatient, setShowSearchPatient] = useState(false);

  const handleAddPatient = () => {
    setShowPatientForm(true);
    setShowSearchPatient(false);
  };

  const handleSearchPatient = () => {
    setShowPatientForm(false);
    setShowSearchPatient(true);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
      <AppTitle />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <PatientActions
            onAddPatient={handleAddPatient}
            onSearchPatient={handleSearchPatient}
          />
        </Grid>
        <Grid item xs={8}>
          {showPatientForm && <PatientForm />}
          {showSearchPatient && <SearchPatient />}
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;