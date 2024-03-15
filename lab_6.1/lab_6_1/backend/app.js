const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 5001; // my computer can not use this port, so I use 5001
const users = [];

const app = express();


app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
  res.json({ pageTitle: 'Add User' });
});

app.get('/users', (req, res, next) => {
  res.json({
    pageTitle: 'User',
    users: users,
    hasUsers: users.length > 0
  });
});

app.post('/add-user', (req, res, next) => {
  users.push({ name: req.body.username });
  res.json({ users: users });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 