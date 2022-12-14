class NewparaController{

    // NEW para
    show(req, res) {
        res.render('body/newpara',{layout: 'default-unlog.hbs'})
    }

}

module.exports = new NewparaController;