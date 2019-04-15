/////Constants///////////////////////
const express = require('express');
const app = express();
const port = 3000;
//db constant
const GOT = require('./models/Gothouses');
const bodyParser = require ('body-parser');
const methodOverride = require ('method-override');
app.use('/css/', express.static(__dirname +'/css'))
///////////////////////////////////////////////////
//////////MiddleWare/////////////////////////////
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'))
/////////////////////////////////////////////////
//index route show GOT connection
app.get('/got/index',(req,res)=>{
    res.send(GOT);
});
///create the index route
app.get('/got',(req,res)=>{
    res.render('index.ejs',{GotHouses:GOT})
});

//create the show route
app.get('/got/:id', (req,res) => {
    res.render('show.ejs',{
        GotHouses:GOT[req.params.id]
    });
});

//create a delete route
app.delete('/got/:id', (req, res) => {

    Fruits.splice(req.params.id, 1);
    res.redirect('/got');
  });
///////////// set listener//////////////
app.listen(port,()=>{
    console.log("app listening on PartnerLab port:",port);
});