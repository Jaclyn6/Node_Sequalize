const aa = new Promise(function(resolve,reject){
    resolve( console.log('프로미스 이행') );
});

aa.then((test) => {
    console.log("프로미스 실행 완료");
    
});

const wait1seconds = new Promise(function(resolve,reject){
    console.log('시작!!');
    setTimeout( () => {
        resolve(console.log('1초뒤 찍는다.'));
    }, 1000);
});

wait1seconds.then(() => {
    console.log("프로미스 실행 완료");
});