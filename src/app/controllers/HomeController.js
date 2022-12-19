const Law = require('../models/Law')
const {multipleMongooseToObject} = require('../../util/mogoose')
const {mongooseToObject} = require('../../util/mogoose');
const User = require('../models/User');

class HomeController {
	//
	show(req, res) {
		Law.find({}).then((law) => {
			res.render('body/default', {
				layout: 'home.hbs',
				law: multipleMongooseToObject(law),
			});
		});

		// res.render('body/default',{layout: 'default-unlog.hbs'})
	}

	//
	setting_profile(req, res) {
		res.render('body/profile', { layout: 'home.hbs' });
	}

	// edit_profile(req, res) {
    //     User.findById(req.params.id).then((User) => {
    //         res.render('body/profile', {
	// 					layout: 'home.hbs',
	// 					user: mongooseToObject(User),
	// 				});
	// 			});
	// }

	newpara(req, res) {
		Law.find({}).then((law) => {
			res.render('body/newpara', {
				layout: 'home.hbs',
				law: multipleMongooseToObject(law),
			});
		});
	}
	// newpara(req, res) {
	// 	const aggregateQuery = Law.aggregate();

 	// 	Law.aggregatePaginate(aggregateQuery, {
	// 		page: 1,
	// 		limit: 5,
	// 	})
	// 		.then(function (results) {
	// 			// res.json(results)
	// 			console.log(results);
	// 			res.render('body/newpara', {
	// 			layout: 'home.hbs',
	// 			results: multipleMongooseToObject(results),
	// 		});

				
	// 		})
	// 		.catch(function (err) {
	// 			console.log(err);
	// 		});
	// };


	admin(req, res) {
		Law.find({}).then((law) => {
			res.render('body/admin', {
				layout: 'home.hbs',
				law: multipleMongooseToObject(law),
			});
		});
	}

	//Thêm
	// [GET] /admin/add
	add(req, res) {
		res.render('body/add', { layout: 'home.hbs' });
	}
	// [POST] /admin/store
	store(req, res) {
		const law = new Law(req.body);

		law.save();
		res.redirect('/home/admin/add');
	}

	//Sửa
	// [GET] /admin/:id/edit
	edit(req, res) {
		Law.findById(req.params.id).then((law) => {
			res.render('body/edit', {
				layout: 'home.hbs',
				law: mongooseToObject(law),
			});
		});
	}

	// [PUT] /admin/edit/:id
	update(req, res) {
		Law.updateOne({ _id: req.params.id }, req.body).then(() =>
			res.redirect('/home/admin')
		);
	}

	//Xóa
	// [GET] /admin/delete/:id
	delete(req, res) {
		Law.deleteOne({ _id: req.params.id }, req.body).then(() =>
			res.redirect('/home/admin')
		);
	}

	results(req, res) {
		Law.find({ content: { $regex: req.query.noidung } }).then((law) => {
			res.render('body/search', {
				layout: 'home.hbs',
				law: multipleMongooseToObject(law),
			});
		});
	}
}

module.exports = new HomeController;