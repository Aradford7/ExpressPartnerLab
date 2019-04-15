const GOT = require('../model/gothouses.js');


module.exports = {
  index: (req, res) => {
    res.render('index.ejs', {
      fruits: Fruit
    });
  },
  show: (req, res) => {
    res.send(Fruit[req.params.id]);
  },
  new: (req, res) => {
    res.render('new.ejs');
  },
  create: (req, res) => {
    Fruit.push(req.body);
    console.log(req.body);
    res.redirect('/fruit');
  },
  edit: (req,res) => {
      res.render('edit.ejs', {
          fruit:Fruit[req.params.id]
      });
    
  },
  destroy: (req, res) => {
    Fruit.splice(req.params.id, 1);
    res.redirect('/fruit');
  }
};