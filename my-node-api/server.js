const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from Node.js backend!');
});

app.get('/featureA', (req, res) => {
  res.send('This is a response from FeatureA!');
});

app.post('/featureB', (req, res) => {
  res.send('Received POST request for FeatureB!');
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
