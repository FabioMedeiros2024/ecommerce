const express = require('express');
const { PrismaClient } = require('@prisma/client');
const app = express();
const create = require('./Create.js');
const deleteX = require('./Delete.js');
const update = require('./Update.js');
const read = require('./Read.js');

const prisma = new PrismaClient();
const PORT = 3000;
const users = " ";

app.use(express.json());

// Without middleware
app.get('/', function (req, res) {
  const options = {
    root: __dirname,
  };
  const fileName = 'index.html';
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.error('Error sending file:', err);
    } else {
      console.log('Sent:', fileName);
    }
  });
});

app.post('/post', function (req, res) {
  app.use(express.static('js'));
  const { cod, nome, descricao } = req.query;
  try {
      create.create(parseInt(cod),nome,descricao)
      res.status(200).json();  
  } catch (error) {
    console.error('Error creating user:', error);
    res
      .status(500)
      .json({ error: 'An error occurred while creating the user.' });
  }
});

app.delete('/delete', function (req, res) {
  const { cod } = req.query;
  console.log('delete');
  console.log( "cod:" + cod );
  deleteX.deleteX(parseInt(cod));
  try {
    res.status(200).json();
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });  
  }
});

app.put('/put', function (req, res) {
  console.log('put: ');
  console.log('req.query: ' + req.query);
  const { cod, nome, descricao } = req.query;
  console.log( "cod: " + cod + " nome: " + nome + " descricao: " + descricao)
  update.update(parseInt(cod),nome,descricao);	
  try {
    res.status(200).json();
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });  
  }
});

app.get('/get', function (req, res) {
  const { cod } = req.query;
  read.read(parseInt(cod))
    .then(function(x) { console.log(x) })
    .catch(function(err){ console.log(err)})
    .finally(console.log('End Read!!'));
  try {
    res.status(200).json();
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while fetching users.' });  
  }
  });

app.listen(PORT, function (err) {
  if (err) console.error(err);
  console.log('Server listening on PORT', PORT);
});
