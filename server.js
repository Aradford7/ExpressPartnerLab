const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require ('body-parser');
const methodOverride = require ('method-override');
///////////// set listener//////////////
app.listen(port,()=>{
    console.log("app listening on PartnerLab port:",port);
});