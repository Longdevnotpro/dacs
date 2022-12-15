const Law = require('../models/Law')
const {multipleMongooseToObject} = require('../../util/mogoose')
class HomeController{

    // 
    show(req, res) {

        Law.find({})
            .then(law  => {
                res.render('body/default',
                {
                    layout: 'home.hbs', 
                    law:multipleMongooseToObject(law) 
                })
            })
        
        // res.render('body/default',{layout: 'default-unlog.hbs'})
    }

    setting_profile(req,res){
        res.render('body/profile', {layout: 'home.hbs'})
       
    }

    newpara(req,res){
        res.render('body/newpara', {layout: 'home.hbs'})       
    }

    admin(req,res){
        Law.find({})
            .then(law  => {
                res.render('body/admin',
                {
                    layout: 'home.hbs', 
                    law:multipleMongooseToObject(law) 
                })
            })
    }

    add(req,res){
        res.render('body/add',{layout: 'home.hbs'})
    }
    
}

module.exports = new HomeController;