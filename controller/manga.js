const { mangas } = require('../models')

class MangaController {
    static async getManga (req, res, next){
        try {
            const result = await mangas.findAll({
                order: [
                    ['id', 'ASC']
                ],
                // include: [
                //     user
                // ]
            })
            // res.status(200).json(result);
            res.render('manga.ejs', {manga: result})
        }
        catch (err){
            next(err)
        }
    }

    static async addFormManga (req, res, next){
        res.render('addManga.ejs');
    }

    static async addManga (req, res, next){
        const { title, image, genre, author, rate, synopsis } = req.body;
        // const UserId = req.userData.id
        try{
            const found =  await mangas.findOne({
                where: { title }
            })
            if (found){
                res.status(409).json({
                    msg: "Existing title, choose another title."
                })
            } else {
                const manga = await mangas.create({
                    title, 
                    image, 
                    genre, 
                    author, 
                    rate, 
                    synopsis, 
                    // UserId
                })
                res.status(201).json(manga)
                res.redirect('/manga')
            }
        } catch (err) {
            // console.log(err);
            next(err);
        }
    }

    static async deleteManga(req, res, next){
        const id = req.params.id;
        // console.log (id)
        try {
            const result = await mangas.destroy({
                where: { id }
            })
            // console.log(result)
            res.status(200).json({
                result,
                msg: "Manga has been deleted."
            })
            res.redirect('/manga')
        } catch (err) {
            next (err)
        }
    }

    static async editFormManga (req, res, next){
        const id = req.params.id;
        try {
            const result = await mangas.findOne({
                where: { id }
            })
            res.render('editManga.ejs', {manga:result});
        }
        catch (err){
            next(err)
        }
    }

    static async editManga(req, res, next) {
        const id = req.params.id;
        const { title, image, genre, author, rate, synopsis } = req.body;
        // console.log("update manga")
        try{
            const result =  await mangas.update({
                title,
                image,
                genre,
                author,
                rate,
                synopsis
            },{
                where: { id }
            })
            if (result[0] === 1){
                res.status(200).json(result)
                res.redirect('/manga')
            }else{
                res.send('Update not completed')
            }
            
        } catch (err) {
            next(err)
        }
    }
    static async findById (req, res, next){
        const id = req.params.id;
        try {
            const result =  await mangas.findOne({
                where : { id }
            })
              res.status(200).json(result)
        } catch (err) {
            next (err)
        }
    }
}


module.exports = MangaController;