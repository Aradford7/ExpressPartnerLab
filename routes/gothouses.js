const express = require('express');
const fruitRouter = express.Router();
const fruitController = require('../controller/fruit.js');

fruitRouter.get('/', fruitController.index);
fruitRouter.get('/new', fruitController.new);
fruitRouter.get('/:id', fruitController.show);
fruitRouter.get('/:id/edit', fruitController.edit);
fruitRouter.put('/')
fruitRouter.post('/new', fruitController.create);
fruitRouter.delete('/:id', fruitController.destroy);

module.exports = fruitRouter;