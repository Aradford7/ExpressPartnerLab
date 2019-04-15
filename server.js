/////Constants///////////////////////
const express = require('express');
const app = express();
const port = 3000;
//db constant
const GOT = require('./models/GotHouses');
const bodyParser = require ('body-parser');
const methodOverride = require ('method-override');
///////////////////////////////////////////////////
//////////MiddleWare/////////////////////////////

/////////////////////////////////////////////////
//index route show GOT connection
app.get('/got',(req,res)=>{
    res.send(GOT);
});
///////////// set listener//////////////
app.listen(port,()=>{
    console.log("app listening on PartnerLab port:",port);
});