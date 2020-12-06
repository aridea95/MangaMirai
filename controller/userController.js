const { users } = require('../models')

class usersController {
    static async getusers(req, res, next) {        
        try {
            const result = await users.findAll({
                order: [
                    ['id', 'ASC']
                ],
                // include: [
                //     mangas
                // ]
            })
            res.status(200).json(result);
            // res.render('users.ejs', {users: result})
        }
        catch (err){
            next(err)
        }
    }
    static addFormusers(req, res) {
        res.render('addusers.ejs');
    }
    static addusers(req, res) {
        const { name, password, email, age, gender } = req.body;
        users.create({
            name,
            password,
            email,
            age,
            gender

        }) 
        .then(result => {
                // res.send(result)
                res.redirect('/user')
        })
        .catch(err => {
                res.send(err)
        })
    }
    static deleteusers(req, res) {
        const id = req.params.id;
        users.destroy({
            where: { id }
        })
            .then(() => {
                // res.send("Deleted")
                res.redirect('/users')
            })
            .catch(err => {
                res.send(err)
            })
    }

    static findById(req, res) {
        const id = req.params.id;
        users.findOne({
            where: { id }
        })
            .then(result => {
                res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }

    static editFormusers(req, res) {
        const id = req.params.id;
        // console.log(id)
        users.findOne({
            where : { id }
        })
        .then(result => {
            console.log(result)
            res.render('editusers.ejs', { users:result });
        })
        .catch(err=>{
            res.send(err);
        })
    }

    static editusers(req, res) {
        const id = req.params.id;
        const { name, password, email, age, gender } = req.body;
        users.update({
            name,
            password,
            email,
            age,
            gender
        }, {
            where: { id }
        })
        .then(result => {
            // res.send(result)
            res.redirect('/userss')
        })
        .catch(err => {
            res.send(err)
        })
    }
    static async login(req, res) {
        const { email, password } = req.body;
        
        try {
            
            const email = await users.findOne({
                where : {
                    email
                }
            })
            // console.log('users',users)
            if(email){
                
                if(decryptPwd(password, users.password)){
                    console.log('decrypt')
                    const access_token = tokenGenerator(email)
                    console.log('acces token generator',access_token)
                    //console.log(`akses token: ${access_token}`)
                    res.status(200).json({access_token})
                    

                }else{
                    res.status(404).json({
                        msg : "Pwd is not the same."
                    })
                }

            }else{
                res.status(404).json({
                    msg : "users is not found thanks."
                })
            }

        }catch (err) {
            res.status(500).json(err)
        }
    }  
}

module.exports = usersController; 
