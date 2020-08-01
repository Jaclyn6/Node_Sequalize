const models = require('../../models');

exports.get_products = async ( _ , res) => {
    // res.render( 'admin/products.html' , 
    //     { message : "hello" } // message 란 변수를 템플릿으로 내보낸다.
    // );

    // DB SELECT (조회) 실행
    //async로 await로 
    try{
        const products = await models.Products.findAll();
        res.render('admin/products.html', {products}); // 템플릿 변수명과 보낼 변수명이 일치하면 products 하나만 적어도 됨.
    }catch(e){

    }
    

}

exports.get_products_write = async ( _ , res) => {
    await res.render( 'admin/write.html');
}

exports.post_products_write = async ( req , res ) => {
    //res.send(req.body);
    // Products 테이블에 Insert
    await models.Products.create({
        name : req.body.name,
        price : req.body.price,
        description : req.body.description
    });
    res.redirect('/admin/products');

    // // 만약에 post data와 테이블이 매핑이 되면 아래처럼 insert문을 쓸 수도 있음
    // models.Products.create(req.body).then( () => {
    //     res.redirect('/admin/products');
    // });
}

// SELECT 문
exports.get_products_detail = async (req,res) => {
    const product = await models.Products.findByPk(req.params.id);
    res.render('admin/detail.html', {product : product});

    // const product2 = models.Products.findByPk(req.params.id).then( (result) => {
    //     //console.log(result);
        
    // });
 
}

exports.get_products_edit = async (req,res) => {
    const product = await models.Products.findByPk(req.params.id)
    res.render('admin/write.html', {product});
    
}

//Update
exports.post_products_edit = async (req,res) => {
    await models.Products.update({
        name : req.body.name,
        price : req.body.price,
        description : req.body.description //update 할 데이터
    }, {
        where : {id : req.params.id} //조건절
    });
    res.redirect('/admin/products/detail/' + req.params.id);
}

//DELETE 문
exports.get_products_delete = async (req,res) => {
    await models.Products.destroy({
        where : {
            id : req.params.id
        }});
    res.redirect('/admin/products');
}