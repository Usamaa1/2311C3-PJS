// ************NORMAL FUNCTION************
// function add(num1,num2){
//     // console.log(num1 + num2);
//     return num1 + num2;
// }
// console.log(add(4,5))


// const adds = (n1,n2) => {
//     //  console.log(n1 + n2)
//     return n1 + n2;
// }

// ************ARROW FUNCTION************

// const adds = (n1,n2) => n1 + n2;
// console.log(adds(2,3) + 80)

// ************SELF INVOKING FUNCTION************

// (()=>{
//     console.log('Hello Welcome to this program')
// })()


// ************ANONYMOUS FUNCTION************


// function add() {
//     return function(){

//     }
// }

// function add() {
//     return ()=>{
        
//     }
// }




// ********* FUNCTION DECLARATION *********

// *********HOISTING*********

// add(45,65)


// function add(a,b)
// {
//     console.log(a+b);
// }




// ********* FUNCTION EXPRESSION *********



// add(45,65)

// const add = function(a,b)
// {
//     console.log(a+b);
// }



// ********* CALLBACK FUNCTIONS *********


// function post1(call)
// {
//     setTimeout(()=>{
//         console.log('Post 1 appeared')
//         call();
//     },6000)
// }
// function post2(call)
// {
//     setTimeout(()=>{
//         console.log('Post 2 appeared')
//         call();
//     },2000)
// }
// function post3(call)
// {
//     setTimeout(()=>{
//         console.log('Post 3 appeared')
//         call();
//     },5000)
// }
// function post4()
// {
//     setTimeout(()=>{
//         console.log('Post 4 appeared')
//     },4000)
// }


// post1();
// post2();
// post3();
// post4();

// post1(()=>{
//     post2(()=>{
//         post3(()=>{
//             post4()
//         })
//     })
// })





// function post1(a)
// {
//     setTimeout(()=>{
//         console.log('Post 1 appeared')
//         a();
//     },7000);
// }

// function post2(b)
// {
//     setTimeout(()=>{
//         console.log('Post 2 appeared')
//         b();
//     },4000);
// }

// function post3(a)
// {
//     setTimeout(()=>{
//         console.log('Post 3 appeared')
//         a();
//     },5000);
// }

// function post4(call)
// {
//     setTimeout(()=>{
//         console.log('Post 4 appeared')
//         call();
//     },8000);
// }

// function post5()
// {
//     setTimeout(()=>{
//         console.log('Post 5 appeared')
     
//     },3000);
// }



// post1();
// post2();
// post3();
// post4();
// post5();


// post1(()=>{
//     post2(()=>{
//         post3(()=>{
//             post4(()=>{
//                 post5()
//             })
//         })
//     })
// })































