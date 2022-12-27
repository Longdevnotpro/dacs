const Law = require('../models/Law')
const { multipleMongooseToObject } = require('../../util/mogoose')
const { mongooseToObject } = require('../../util/mogoose');

class SiteController {

    // 
    index(req, res) {

        Law.find({})
            .then(law => {
                res.render('body/default-unlog',
                    {
                        layout: 'default-unlog.hbs',
                        law: multipleMongooseToObject(law)
                    })
            })

        // res.render('body/default',{layout: 'default-unlog.hbs'})
    }

    results(req, res) {
        Law.find({
            $or: [
                { content: {$regex: req.query.noidung}},
             ]
    })
            .then(law => {
                res.render('body/search-unlog',
                    {
                        layout: 'default-unlog.hbs',
                        law: multipleMongooseToObject(law)
                    })
            })
    }

    content(req,res){
        Law.findById(req.params.id)
			.then((law) => {
				res.render('body/content-unlog', {
                    layout: 'default-unlog.hbs',
					law: mongooseToObject(law),
				});
			});
    }
}

module.exports = new SiteController;