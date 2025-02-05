// controllers/userController.js
const db = require('./db');

exports.getAllusers = (req, res) => {
  db.query('SELECT * FROM user', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

exports.getUserById = (req, res) => {
  const userId = req.params.id;
  db.query('SELECT * FROM user WHERE id = ?', [userId], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results[0]);
  });
};

exports.createUser = (req, res) => {
  console.log("req.body",req.body)
  const { username, email, password } = req.body;
  db.query('INSERT INTO user (username, email, password) VALUES (?, ?, ?)', [username, email, password], (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: results.insertId, username, email });
  });
};

exports.updateUser = (req, res) => {
  const userId = req.params.id;
  const { username, email, password } = req.body;
  db.query('UPDATE user SET username = ?, email = ?, password = ? WHERE id = ?', [username, email, password, userId], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'User updated successfully' });
  });
};

exports.deleteUser = (req, res) => {
  const userId = req.params.id;
  db.query('DELETE FROM user WHERE id = ?', [userId], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'User deleted successfully' });
  });
};