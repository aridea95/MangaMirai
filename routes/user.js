const { Router } = require('express');
const router = Router();
const favoriteController = require ('../controller/favoriteController')
const UserController = require('../controller/userController')

router.get('/', UserController.getusers);
router.get('/add', UserController.addFormusers)
router.post('/add', UserController.addusers)
// router.get('/info/:id', UserController.infoUser)
// // router.post('/info/:id', UserController.addCrewUser)
router.get('/delete/:id', UserController.deleteusers)
router.get('/edit/:id', UserController.editFormusers)
router.post('/edit/:id', UserController.editusers)
router.get('/:id', UserController.findById)

router.post('/login', UserController.login)
router.get('/favorite',favoriteController.listFavoriteUser)

module.exports = router;
