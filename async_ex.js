const models = require('./models');

async function getProducts() {

    try {
        const product1 = await models.Products.findByPk(1);
        const product3 = await models.Products.findByPk(3);
    
        console.log(product1.dataValues.id);
        console.log(product3.dataValues.price);
    }catch(err){
        console.log(err);
    }
   
}

getProducts();