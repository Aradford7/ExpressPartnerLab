const express = require('express');
const gotRouter = express.Router();
const gotController = require('../controller/gothouses.js');

gotRouter.get('/', gotController.index);
gotRouter.get('/new', gotController.new);
gotRouter.get('/:id', gotController.show);
gotRouter.get('/:id/edit', gotController.edit);
gotRouter.put('/:id', gotController.update);
gotRouter.post('/new', gotController.create);
gotRouter.delete('/:id', gotController.destroy);

module.exports = gotRouter;