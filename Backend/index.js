const express = require('express');
const cors = require('cors');

const app = express();
const router = require('./view/index');

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.route('/').get((req, res) => {
  res.send('Welcome to the Afformed API');
});

app.listen(9876, () => {
  console.log(`Server is running on port 9876`);
});