const express = require('express');
const app = express();
const path = require('path');


app.get('/', (req, res)=> {
    res.sendFile(path.join(__dirname + '/../public/index.html'));
});


app.get('/user', (req, res)=> {
    console.log(req.query);
    res.json({
      Nombre: req.query.name,
      Mensaje: req.query.message
    });
});



app.listen(3000);
console.log('Almundo app and listening on port 3000');
