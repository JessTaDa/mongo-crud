// /controllers/ingredientController.js

const mongoose = require('mongoose');
const Ingredient = require('../models/Ingredient');

exports.getIngredient = (req, res) => {
	Ingredient.find()
		.then((ingredients) => {
			res.render('index', {
				title: 'Ingredients',
				ingredients: ingredients
			})
		})
};

exports.editIngredient = (req, res) => {
	Ingredient.findOne({ _id: req.params.id })
		.then(ingredient => {
			res.render('editIngredient', {ingredient: ingredient});
		})
}

exports.createIngredient = (req, res) => {
	// console.log('reqy.body is:', req.body);
	const name = req.body.ingredient_name;
	let ingredient = new Ingredient();
	ingredient.name = name;
	ingredient.save()
		.then(() => {
			res.redirect('/')
		})
	}

exports.updateIngredient = (req, res) => {
	// console.log('reqy.body:', req.body);
	Ingredient.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true // returns new ingredient
	})
		.then(ingredient => {
			res.redirect('/')
		})
	}
