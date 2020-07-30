const models = require('../../models');

exports.get_products = ( _ , res) => {
    res.render( 'admin/products.html' , 
        { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    );
}

exports.get_products_write = ( _ , res) => {
    res.render( 'admin/write.html');
}

exports.post_products_write = ( req , res ) => {
    //res.send(req.body);
    // Products 테이블에 Insert
    models.Products.create({
        name : req.body.name,
        price : req.body.price,
        description : req.body.description
    }).then( () => {
        res.redirect('/admin/products');
    });

    // // 만약에 post data와 테이블이 매핑이 되면 아래처럼 insert문을 쓸 수도 있음
    // models.Products.create(req.body).then( () => {
    //     res.redirect('/admin/products');
    // });
}