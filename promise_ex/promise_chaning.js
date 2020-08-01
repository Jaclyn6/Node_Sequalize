const p1 = new Promise((resolve,reject)=> {
    setTimeout(()=> {
        console.log("5초 뒤 실행");
        resolve({p1_text : "p1의 텍스트"});
    }, 5000);
});

const p2 = new Promise((resolve,reject)=> {
    setTimeout(()=> {
        console.log("8초 뒤 실행");
        resolve({p2_text : "p2의 텍스트"});
    }, 8000);
});

// 이 과정을 promise all로 할 수 있음
// p1.then((result1) => {
//    console.log("p1 = " + result1.p1_text); 
//    return p2;
// }).then((result2) => {
//     console.log("p2 = "+ result2.p2_text);
// });


//Promise all
//p1,p2가 동시에 시작되기 때문에 총 3초가 걸림
// Promise.all([p1,p2]).then((result) => {
//     console.log("p1 = " + result[0].p1_text);
//     console.log("p2 = " + result[1].p2_text);
// })

// //Promise race
// //가장 먼저 종료된 promise객체의 결과만 가져옴
// Promise.race([p1,p2]).then((result => {
//     console.log(result);
// }))

(async () => { //await 두개 연속 시 동시에 실행 됌
    const a = await p1;
  
    console.log(a);
    console.log("test");
    
})();

(async () => {
    const b = await p2;
    console.log(b);
    console.log("test2");
})();