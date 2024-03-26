const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://abaundwal:TuNtHgtybKtzC1md@app-cluster.l7ggate.mongodb.net/app-db?retryWrites=true&w=majority&appName=app-cluster";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
}

module.exports = connectToDatabase;