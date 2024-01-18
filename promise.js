// let getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log('Promise')
//         reject("Error")
//         //resolve("Complete ")
//     })
// }

// let promise = getPromise();

// console.log(promise);

// promise.then((resolve)=>{
//     console.log('Promise done');
// })

// promise.catch((error)=>{
//     console.log('Some error occurred');
// })

// promise.finally(()=>{
//     console.log('promise in finally block');
// })



// function myAsync(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Inside first promise');
//             resolve('1st done')
//         },4000)
//     })
// }

// function myAsync2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log('Inside Second Promise')
//             resolve("2nd Done")
//         },4000)
//     })
// }

// console.log('Before going in to the promise1');
// let myPromise = myAsync()

// myPromise.then((res)=>{
//     console.log(res);
// })

// console.log('Before going in to the promise2');
// let myPromise2 = myAsync2()

// myPromise2.then((res)=>{
//     console.log(res);
// })

// //think output before chaining of then

// //i want to print data one after another



// console.log('Fetching data line by line i mean one after another')
// let p1 = myAsync()

// console.log('fetch data of p1')
// p1.then((res)=>{
//     console.log(res)
//     console.log('fetch data of p2')
//     let p2 = myAsync2()
//     p2.then((res)=>{
//         console.log(res)    
//     })
// })



// //chaining

// p1.then((res)=>{
//     console.log(res)
//     console.log('fetch data of p2')
//     return myAsync2()
// }).then((res)=>{
//     console.log(res)
// })



//async

async function getData(data) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Data ${data} fetched`);
            resolve(`Data ${data}`);
        }, 2000); 
    });
}

async function fetchData() {
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
    await getData(6);
}

fetchData();


