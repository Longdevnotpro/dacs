class HomeController{

    // 
    show(req, res) {
        res.render('body/default',{layout: 'home.hbs'})
    }

    setting_profile(req,res){
        res.render('body/profile', {layout: 'home.hbs'})
       
    }

    newpara(req,res){
        res.render('body/newpara', {layout: 'home.hbs'})       
    }

    admin(req,res){
        res.render('body/admin', {layout: 'home.hbs'})
    }
    
}

module.exports = new HomeController;