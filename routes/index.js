const { Router } = require('express');
const favoriteRoutes = require('./favorite')
const UserRoutes = require('./user');
const mangaRoutes = require('./manga')
const router = Router();

router.get('/', (req,res)=>{
    res.status(200).json({
        message : "This is home page thanks."
    })
});
router.use('/favorite',favoriteRoutes)
router.use('/user', UserRoutes)
router.use('/manga', mangaRoutes)

module.exports = router;
