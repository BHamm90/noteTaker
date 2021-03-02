const expressRoute = require('express').Router();
const path = require('path');
const fs = require('fs');
const jsonDB = path.join(__dirname, "../../db/db.json")

expressRoute.get('/', (req, res) => {fs.readFile(jsonDB, 'utf8', (err, data) => {
    data = JSON.parse(data)
    res.json(data)
  })
});

expressRoute.post('/',(req, res) => {
  let currentNote = req.body;
  fs.readFile(jsonDB, 'utf8',(err, data) => {
    data = JSON.parse(data)
    currentNote.id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    data.push(currentNote)
    fs.writeFile(jsonDB, JSON.stringify(data),
      err => {
        if (err) {
          res.json(err);
        } else {
          res.json(data);
        }
      })
  })
});

expressRoute.delete('/:id', (req, res) => {
  fs.readFile(jsonDB, 'utf8',(err, data) => {
    data = JSON.parse(data)
    data = data.filter(post => post.id !== parseInt(req.params.id))
    fs.writeFile(jsonDB, JSON.stringify(data),
      err => {
        if (err) {
          res.json(err);
        } else {
          res.json(data);
        }
      })
  })

});

module.exports = expressRoute