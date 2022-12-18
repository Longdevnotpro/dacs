const Law = require('../models/Law')
const {multipleMongooseToObject} = require('../../util/mogoose')
const {mongooseToObject} = require('../../util/mogoose')

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
        Law.find({}).then((law) => {
					res.render('body/newpara', {
						layout: 'home.hbs',
						law: multipleMongooseToObject(law),
					});
				});      
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

    store(req, res){
        const law = new Law(req.body);

        law.save();
        res.redirect('/home/admin/add')
    }

    edit(req,res){
        Law.findById(req.params.id)
            .then(law  => {
                res.render('body/edit',
                {
                    layout: 'home.hbs', 
                    law:mongooseToObject(law) 
                })
            })
    }

    update(req,res){
        Law.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/home/admin'))
    }

    delete(req,res){
        Law.deleteOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/home/admin'))
    }

    results(req,res){
        Law.find({"content" : {$regex : req.query.noidung}})
        .then(law  => {
            res.render('body/search',
            {
                layout: 'home.hbs', 
                law:multipleMongooseToObject(law) 
            })
        })
    }
    
}

module.exports = new HomeController;