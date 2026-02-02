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