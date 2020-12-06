const { user, manga, favorite } = require('../models')

class favoriteController {
    static async getFavorite(req, res) {
        try {
            const result = await favorite.findAll({
                order: [
                    ['id', 'ASC']
                ],
                include : [
                    user,manga
                ]
            })
            res.status(200).json(result);

        }
        catch (err) {
            res.status(500).json(err);
        }
    }
    static async addFavorite(req, res) {
        const { user_id , manga_id } = req.body;
        try {
            const favorite = await favorite.create({
                user_id , manga_id
            })

            res.status(201).json(favorite)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async listFavoriteUser(req, res) {
        const userId = req.params.id;
        try {
            const favorite = await favorite.findAll({
                where : {user_id}
            })

            res.status(201).json(favorite)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static async listFavoriteManga(req, res) {
        const userId = req.params.id;
        try {
            const favorite = await favorite.findAll({
                where : {manga_id}
            })

            res.status(201).json(favorite)
        } catch (err) {
            res.status(500).json(err)
        }
    }
    static deleteFavorite(req, res) {
        const id = req.params.id;
        favorite.destroy({
            where: { id }
        })
            .then(() => {
                res.send("Deleted")
                res.redirect('/favorites')
            })
            .catch(err => {
                res.send(err)
            })
    }

}
module.exports = favoriteController