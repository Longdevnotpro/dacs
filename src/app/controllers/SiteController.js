const Law = require('../models/Law')
const { multipleMongooseToObject } = require('../../util/mogoose')
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
        Law.find({ $or: [
            { content: {$regex: req.body.noidung} },
            { $or: [{c: 1}, {d: 1}] }
        ] })
            .then(law => {
                res.render('body/search-unlog',
                    {
                        layout: 'default-unlog.hbs',
                        law: multipleMongooseToObject(law)
                    })
            })
    }
}

module.exports = new SiteController;