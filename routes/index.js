var express = require('express');
var router = express.Router();
// var middleware = require('./middleware');

const Ingredient = require('../models/Ingredient');
const ingredientController = require('../controllers/ingredientController');



/* GET home page. */
router.get('/', ingredientController.getIngredient);

router.post('/', ingredientController.createIngredient);

router.get('/ingredients/:id/edit', ingredientController.editIngredient);

router.post('/ingredients/:id/edit', ingredientController.updateIngredient);

module.exports = router;
