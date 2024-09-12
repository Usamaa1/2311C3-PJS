// function post1()
// {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log('Post 1 appeared');
//             resolve();
//         },5000)
//     })

// }
// function post2()
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('Post 2 appeared')
//             resolve();
//         },7000)
//     })

// }
// function post3()
// {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('Post 3 appeared')
//             resolve()
//         },4000)
//     })

// }
// function post4()
// {
//    return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('Post 4 appeared')
//             reject('In post 4 error occured');
//         },2000)  
//     })

// }
// function post5()
// {
//    return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log('Post 5 appeared')
//             resolve();
//         },6000)
//     })

// }


// post1()
// post2()
// post3()
// post4()
// post5()

// post1().then(post2).then(post3).then(post4).then(post5).catch(error => console.error(error))



// ********************************************
// ********************************************
//  REJECT AND RESOLVE EXAMPLE IN ONE FUNCTION
// ********************************************
// ********************************************



// function divide(numerator, denominator ) {
//     return new Promise((resolve, reject)=>{


//         if(denominator == 0)
//             {
//              reject('The denominator is 0 so we cannot divide anything with it');   
//             }
//             else
//         {
//             console.log(numerator / denominator);
//             resolve();
//         }

//     })
// }


// divide(4,0).catch(error => console.error(error));



