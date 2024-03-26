const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoURI = "mongodb+srv://abaundwal:TuNtHgtybKtzC1md@app-cluster.l7ggate.mongodb.net/app-db?retryWrites=true&w=majority&appName=app-cluster"; // ..
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

// Routes
// TODO: Add routes for patient CRUD operations
// ...

// Routes
const patientRoutes = require('./routes/patientRoutes');
app.use('/api/patients', patientRoutes);

// ...

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});