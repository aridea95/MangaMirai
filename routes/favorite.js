const { Router } = require('express');
const router = Router();
const favoriteController = require('../controller/favoriteController')

router.get('/', favoriteController.getFavorite);
router.get('/add', favoriteController.addFavorite)
router.post('/delete/id', favoriteController.deleteFavorite)
module.exports = router