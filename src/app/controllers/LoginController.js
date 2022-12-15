const User = require('../models/User')


class LoginController{

    // LOGIN function
    dangnhap(req, res,next) {
        User.find({})
            .then(user => res.render('body/login', {layout: 'log.hbs', user}))
            .catch(next)

        // res.render('body/login',{layout: 'log.hbs'})
    }

}

module.exports = new LoginController;