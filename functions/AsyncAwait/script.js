function post1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Post 1 appeared');
            resolve();
        }, 5000)
    })

}
function post2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Post 2 appeared')
            resolve();
        }, 7000)
    })

}
function post3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Post 3 appeared')
            resolve()
        }, 4000)
    })

}
function post4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Post 4 appeared')
            reject('In post 4 error occured');
        }, 2000)
    })

}
function post5() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Post 5 appeared')
            resolve();
        }, 6000)
    })

}


async function run() {

    try {
        await post1()
        await post2()
        await post4()
        await post3()
        await post5()
    } catch (error) {
        console.error(error)
    }



}

run()


// post1().then(post2).then(post3).then(post4).then(post5).catch(error => console.error(error))
