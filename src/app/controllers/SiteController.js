const Law = require('../models/Law')
const {multipleMongooseToObject} = require('../../util/mogoose')
class SiteController{

    // 
    index(req, res) {

        Law.find({})
            .then(law  => {
                res.render('body/default',
                {
                    layout: 'default-unlog.hbs', 
                    law:multipleMongooseToObject(law) 
                })
            })
        
        // res.render('body/default',{layout: 'default-unlog.hbs'})
    }
}

module.exports = new SiteController;