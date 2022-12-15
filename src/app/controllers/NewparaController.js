const Law = require('../models/Law');
const { multipleMongooseToObject } = require('../../util/mogoose');
class NewparaController {
	// NEW para
	show(req, res) {
		Law.find({}).then((law) => {
			res.render('body/newpara', {
				layout: 'default-unlog.hbs',
				law: multipleMongooseToObject(law),
			});
		});
	}
}

module.exports = new NewparaController();
