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
        Law.find({
            $or: [
                { content: {$regex: req.query.noidung}, chuong: { $eq: req.query.chuong } },
                { chuong: {$eq: req.query.chuong}},
                { muc: {$eq: req.query.muc}},
                { dieu: {$eq: req.query.dieu}},
                { khoan: {$eq: req.query.khoan}},
                // { content: {$regex: req.query.noidung}},


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
}

module.exports = new SiteController;