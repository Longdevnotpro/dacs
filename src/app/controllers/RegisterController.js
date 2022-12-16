const User = require('../models/User');

class RegisterController {
	//
	register(req, res) {
		res.render('body/register', { layout: 'register.hbs' });
	}

    //
	store(req, res) {
		const user = new User(req.body);

		user.save();
		res.redirect('/login');
	}
}

module.exports = new RegisterController();
