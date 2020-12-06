const { Router } = require ('express');
const router = Router();
const MangaController = require ('../controller/manga')
const favoriteController = require ('../controller/favoriteController')
// const { authentication, authorization } = require ('../middlewares/auth')

// router.get('/', authentication, MangaController.getManga)
// router.get('/', authentication, MangaController.addFormManga)
// router.post('/', authentication, MangaController.addManga)
// router.delete('/:id', authentication, authorization, MangaController.deleteManga)
// router.get('/:id', authentication, authorization, MangaController.updateFormManga)
// router.put('/:id', authentication, authorization, MangaController.updateManga)

router.get('/', MangaController.getManga)
router.get('/add', MangaController.addFormManga)
router.post('/add', MangaController.addManga)
router.delete('/delete/:id', MangaController.deleteManga)
router.get('/edit/:id', MangaController.editFormManga)
router.put('/edit/:id', MangaController.editManga)
router.get('/:id', MangaController.findById)
router.get('/favorite',favoriteController.listFavoriteManga)

module.exports = router;
