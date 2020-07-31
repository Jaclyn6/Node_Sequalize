const models = require('../../models');

exports.get_products = ( _ , res) => {
    // res.render( 'admin/products.html' , 
    //     { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    // );

    // DB SELECT (조회) 실행
    models.Products.findAll({
    }).then( (result) => {
        res.render('admin/products.html', {products : result}) // 템플릿 변수명과 보낼 변수명이 일치하면 products 하나만 적어도 됨.
    });
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

// SELECT 문
exports.get_products_detail = (req,res) => {
    models.Products.findByPk(req.params.id).then( (result) => {
        //console.log(result);
        res.render('admin/detail.html', { product : result });
    });
}

exports.get_products_edit = (req,res) => {
    models.Products.findByPk(req.params.id).then( (product) => {
        res.render('admin/write.html', {product});
    });
}

//Update
exports.post_products_edit = (req,res) => {
    models.Products.update({
        name : req.body.name,
        price : req.body.price,
        description : req.body.description //update 할 데이터
    }, {
        where : {id : req.params.id} //조건절
    }
    ).then(() => {
        res.redirect('/admin/products/detail/' + req.params.id);
    }) 
}

//DELETE 문
exports.get_products_delete = (req,res) => {
    models.Products.destroy({
        where : {
            id : req.params.id
        }
    }).then(() => {
        res.redirect('/admin/products');
    });
}