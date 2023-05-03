// let someArr = [1,2,3,4,5,6,7,8,9,0];

// (function (someArr){
//     console.log(someArr.map(item => [Math.random(), item]).sort((a, b) => a[0] - b[0]))
// }(someArr))

// const sayHello = function(){
//     console.log('hello world!!')
// }
// sayHello()

// console.log(someArr.find((item) => item === ''))

let myPosts = document.querySelector('#myPosts')
let addPost = document.querySelector('#addPost')
let news = document.querySelector('#news')
let about = document.querySelector('#about')
let main = document.querySelector('main')

myPosts.addEventListener('click', renderPosts);

function renderPosts(){

}

addPost.addEventListener('click', add);
let API = 'http://localhost:3000/posts'
async function add(){
    let obj = {name: 'a'}
    await fetch(API, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
}

news.addEventListener('click', postsNews);

function postsNews(){

}

about.addEventListener('click', aboutPosts);

function aboutPosts(){
    main.innerHTML = `
        <div class"about">
            <p>Hello, it's me!!</p>
        </div>
    `
}








