const GOT = require('../models/Gothouses.js');


module.exports = {
  index: (req, res) => {
    res.render('index.ejs', {
      GotHouses:GOT
    });
  },
  show: (req, res) => {
    res.render('show.ejs',{
    GotHouses:GOT[req.params.id],
    id:req.params.id
  });
   
  },
  new: (req, res) => {
    res.render('new.ejs');
  },
  create: (req, res) => {
    GOT.push(req.body);
    //console.log(req.body);
    res.redirect('/got');
  },
  edit: (req,res) => {
      res.render('edit.ejs', {
          GotHouses:GOT[req.params.id],
          id: req.params.id
    });
    
  },
  update: (req,res) => {
      GOT[req.params.id] = req.body;
      res.redirect('/got');
  },
  destroy: (req, res) => {
    console.log("hello")
    GOT.splice(req.params.id, 1);
    res.redirect('/got');
  }
};