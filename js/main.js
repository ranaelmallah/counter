let num =document.querySelector(".num")
let dec =document.querySelector(".decrease")
let res =document.querySelector(".reaset")
let inc =document.querySelector(".increase")
let counter =0
num.innerText=counter

inc.onclick=function(){
  counter++
  num.innerText=counter
  num.style.color="green"

}
res.onclick=function(){
    num.innerText=0
    num.style.color="black"

}
dec.onclick=function(){
    counter--
    num.innerText=counter
    num.style.color="red"
 }