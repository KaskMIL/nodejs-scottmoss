import express from 'express';
import bp from 'body-parser';
import morgan from 'morgan';

// Initialize the express app
const app = express();

// Set up the middlewears
app.use(bp.urlencoded({ extended: true }));
// parse the json body 
app.use(bp.json());
// logs information
app.use(morgan('dev'));

const db = [];

app.get('/todo', (req, res) => {
  res.json(db);
});

app.post('/todo', (req, res) => {
  const newTodo = { complete: false, id: Date.now(), text: req.body.text };
  db.push(newTodo);

  res.json(newTodo);
});

app.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
});
