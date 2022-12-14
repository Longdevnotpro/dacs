class LoginController{

    // LOGIN function
    dangnhap(req, res) {
        res.render('body/login',{layout: 'log.hbs'})
    }

}

module.exports = new LoginController;