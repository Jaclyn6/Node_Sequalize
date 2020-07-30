const moment = require('moment');

// table 생성(모델 생성) 작업
module.exports = function(sequelize, DataTypes){
    const Products = sequelize.define('Products',
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
            name : { type: DataTypes.STRING },
            price : { type: DataTypes.INTEGER },
            description : { type: DataTypes.TEXT }
        }
    );
    
    //moment.js를 이용한 날짜 포매팅
    //prototype을 이용해 Products 클래스에 함수 추가
    Products.prototype.dateFormat = (date) => {
        return moment(date).format('YYYY년 MM월 DD일');
    }
    
    return Products;


} 