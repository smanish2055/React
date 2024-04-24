
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3001;

const mongoUri = 'mongodb://127.0.0.1:27017/'; // Replace with your MongoDB URI
const dbName = 'leapfrog'; // Replace with your database name

const client = new MongoClient(mongoUri);

async function connectAndInsertFormData(formData) {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('formdata'); // Replace with your collection name

 await collection.insertOne(formData);

    // if (result && result.ops && result.ops.length > 0) {
    //   console.log('Data inserted:', result.ops[0]);
    // } else {
    //   console.error('Error inserting data: No result data');
    // }
  } catch (err) {
    console.error('Error inserting data:', err);
  } finally {
    await client.close();
  }
}


app.post('/submit-form', (req, res) => {
  const formData = req.body;
  console.log('Received form data:', formData);
  connectAndInsertFormData(formData);
  res.json({ success: 'Data saved successfully.' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
