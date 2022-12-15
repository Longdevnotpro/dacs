class SiteController{

    // 
    index(req, res) {
        
        res.render('body/default',{layout: 'default-unlog.hbs'})
    }
}

module.exports = new SiteController;