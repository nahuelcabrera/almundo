const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


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

app.get('/users', (req, res)=>
{
    res.sendFile(path.join(__dirname + '/../public/form.html'));
});

app.post('/datos', (req, res)=>
{
    res.json(req.body);
});



app.listen(3000);
console.log('Almundo app and listening on port 3000');
