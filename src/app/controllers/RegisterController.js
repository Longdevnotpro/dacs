class RegisterController{

    // 
    register(req, res) {
        res.render('body/register',{layout: 'register.hbs'})
    }

    
}

module.exports = new RegisterController;