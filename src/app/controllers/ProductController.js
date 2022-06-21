class ProductController {
    //GET /product
    index(req, res) {
        res.render('product');
    }

    //GET /product/:detail
    show(req, res) {
        res.send('product detail!!');
    }
}

module.exports = new ProductController();
