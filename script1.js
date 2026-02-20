// const para=document.querySelector('p');
// para.textContent='This is a simple sample page.';

// const para=document.getElementById('para');
// para.textContent='this is para1';
// console.log(para);

// const para=document.getElementsByClassName('para')
// para[0].textContent='this is para1'
// para[1].style.color='pink'
// para[1].textContent='this is para2'
// para[2].style.color='blue'
// console.log(para);

// const para=document.querySelector('.para')
// para.style.color='green'
// para.textContent='this is para1'
// console.log(para);

// const para=document.querySelectorAll('.para')
// para[0].innerText='this is para1'
// para[0].textContent='this is para1'
// para[1].style.color='blue'
// para[1].innerHTML

// const button=document.querySelector('#btn')
// // button.classList.add('btn')
// // // button.classList.remove('btn')
// // button.classList.toggle('btn')
// function message(){
//  alert('you have clicked the button')}
//  button.addEventListener('click',message)

//  const button2=document.querySelector('#bt')
//  button2.addEventListener('click',function(){
//     button.removeEventListener('click',message)
//  })

// const btn=document.querySelector('#btn')
// btn.addEventListener('keyup',function(event){
//     console.log(event.key)})

// const btn=document.querySelector('button')
// const div=document.querySelector('.container')
// const div2=document.querySelector('.div2')
// btn.addEventListener("click",function(){console.log("button")},true)
// div.addEventListener("click",function(){console.log("Div")},true)
// div2.addEventListener("click",function(){console.log("Div2")},true)

// debugger
// console.log(a)
// // console.log(b)

// var a=78
// let b=345

// console.log(a)
// console.log(b)

// function print(){
//     let c=45
//     console.log(c)
//     console.log("Inside fn")
// }

// print()

// let total=100

// function calc(){
//     console.log(total)
//     let total=100
// }
// calc()
// console.log("first line");
// setTimeout(()=>{
//     console.log("after 2 sec")
// },2000);
// console.log("second line")




// setTimeout(()=>{
//     alert("alert after 3 sec!!")
// },3*1000);


// setInterval(()=>{
//     console.log("hello world!")
// },2000); 



// const timerId=setInterval(()=>{
//     console.log("hello world!!")
// },1000);

// //console.log(timerId)
// setTimeout(()=>{
//     clearInterval(timerId)
// },10*1000);





// let count=1;

// const id= setInterval(()=>{
//     if(count===10)clearInterval(id)
//     console.log(count)
//     count++;
// },1000);

// function print(){ //callback fn 
//     console.log ("Hello Studentss!!")
// }

// function greet (num){//higher order fn
//     console.log("Welcome to my class!!")
//     setTimeout(() => {
//         console.log("Inside SetTimeout")
//         let firstNAme="Harry"
//         num(firstNAme)
//        }, 2000);
// }

// greet(print)

// console.log("Starting homework...")

// setTimeout(() => {
//     console.log("Homework done!");
//     console.log("Starting dinner...");

//     seetTimeout(() => {
//         console.log("Dinner done!");
//         console.log("Getting ready to go out ...");

//         setTimeout(() => {
//             console.log("Going to the playground!");
//         }, 1000); //after dinner

//     }, 1500); //dinnertime

// }, 2000); // homeowork time

// function finishHomework(callback){
//     console.log("Starting homework...");
//     setTimeout(() => {
//         console.log("Homeowork Done!");
//         callback();
//     }, 2000);
// }

// function eatDinner(callback) {
//     console.log("Starting dinner ...");
//     setTimeout(() => {
//         console.log("Dinner done!");
//        callback();
//     }, 1500);
// }

// function goToPlayground() {
//     console.log("Going to the playground!");
// }

// finishHomework(() => {
//     eatDinner(() => {
//         goToPlayground();
//     });
// }); 
// const p=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let done=false;
//         if(done){
//             resolve({name:"alex",age:34})
//         }else{
//             reject("Network issue")
//         }
//     },5000)
// })
// p.then((data)=>{
//     console.log("Resolved",data)
// }).catch((err)=>{
//     console.log("Rejected",err)
// }) 

// function doHomeowork(){
//     const p=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Homeowork is done")
//             }else{
//                 reject("Homework is not done")
//             }
//         },2000)
//     })
//     return p
// }

// function eatDinnerk(){
//     const p=new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             let done=true;
//             if(done){
//                 console.log("Dinner is done")
//             }else{
//                 reject("Dinner is not done")
//             }
//         },2000)
//     })
//     return p
// }

// doHomeowork().then((data)=>{
//     console.log(data)
//     return eatDinner()
// }).then((data)=>{
//     console.log(data)
//     return goToPlayground()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// }).finally(()=>{
//     console.log("Go to Sleep")
// })

// 9 feb 2026 

// console.log("First Line")
// setTimeout(() => {
//     console.log("Inside Timeout")
// },0);
// const p=new Promise((resolve,reject)=>{
//     resolve()
// })

// p.then(()=>{
//     console.log("Inside Promise")
// }).catch(()=>{
//     console.log("Inside Catch")
// })

// const p2=new Promise((resolve,reject)=>{
//     resolve()
// })

// p2.then(()=>{
//     console.log("Inside Promise2")
// }).catch(()=>{
//     console.log("Inside Catch2")
// })
// console.log("Last Line")
// const form=document.querySelector("#form")
// const eventCards=document.querySelector(".event_cards")

// function orderFood() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("Food Ordered");
//       resolve("Food Ordered");
//     }, 1000);
//   });
// }

// function prepareFood() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("Food Prepeared");
//       resolve("Food Prepeared");
//     }, 1000);
//   });
// }

// function deliverFood() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("Food Delivered");
//       resolve("Food Delivered");
//     }, 1000);
//   });
// }

// orderFood().then((data)=>{
//     console.log(data)
//     return prepareFood()
// }).then((data)=>{
//     console.log(data)
//     return deliverFood()
// }).then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// })

// async function order(){
//     const data=await orderFood()
//     console.log(data)
//     await prepareFood()
//     await deliverFood()
// }

// order()

// console.log("First line")
// try{
//     // console.log(sample)
//     let age=19
//     if(age<18){
//         //error
//         throw new Error("Access Denied")
//     }
// }catch(err){
//     console.log(err)
// }finally{
//     console.log("finally block")
// }

// console.log("last line")

// async function getData(){
//     try{
//         const response= await fetcg("https://dummyjson.com/products")
//         console.log(response.ok)
//         if (response.ok===false) throw new Error("data not found")
//         const data= await response.json()
//         console.log(data)
//     }catch(error){
//        console.log("data not found")
//     }
// }
// getData()

async function sendData(){
    try{
        const response=await fetch('https://dummyjson.com/products/add' , {
            method : 'POST' ,
            headers : {'Content-Type':'application/json'},
            body: JSON.stringify({
                title :"Macbook Pro",
                description : "Macbook Pro",
                Price:100000,
                discountPercentage:5,
                rating:4.5,
                stock:5,
                brand:"Apple",
            })
        })
        const data=await response.json()
        console.log(data)
    }catch(error){
        console.log("Data not found") 
    }
}
sendData() 

let obj={
    title:"Macbook",
    description :"Macbook Pro",
}

localStorage.setItem("Obj",JSON.stringify(Obj))
localStorage.setItem("name","Harmeet Bhati")
localStorage.setItem("age",20)
console.log(localStorage.getItem("name"))
console.log(localStorage.getItem("age"))
console.log(JSON.parse(localStorage.getItem("obj")))

localStorage.removeItem("age")

//localstorage.clear()

sessionStorage.setItem("obj",JSON.stringify(obj))
sessionStorage.setItem("name","Harmeet Bhati")
sessionStorage.setItem("age",20)
console.log(localStorage.getItem("name"))
console.log(localStorage.getItem("age"))
console.log(JSON.parse(localStorage.getItem("obj")))
sessionStorage.removeItem("age")

document.cookie="name=Harmeet Bhati ; expires=Sat 21 Feb 2026 12:00:00 UTC"
document.cookie="age=20; expires=Sat 21 Feb 2026 12:00:00 UTC"

console.log(document.cookie)

async function sample(){
    await fetch("https://127.0.0.1:5500/index.html")
}
sample() 