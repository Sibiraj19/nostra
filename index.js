window.addEventListener('scroll',function(){
    let hidden= document.querySelector(".hidden")
    // let visible=document.querySelector(".visible")
    if(window.scrollY>100)
    {
        hidden.classList.add("visible")
        hidden.classList.remove("hidden")
    }
})

var close=document.querySelector(".close-discount")
var discount=document.querySelector(".discount")
close.addEventListener("click",function(){
    discount.style.display="none"
})
 var menu=document.querySelector(".menu")
 var sidenav=document.querySelector(".side-nav")

 menu.addEventListener("click",function(){
    sidenav.style.left="0"
 })

 var closenav=document.querySelector(".close")
 var sidenav=document.querySelector(".side-nav")
 
 closenav.addEventListener("click",function(){
    sidenav.style.left="-50%"
 })

 var arrival=document.querySelector(".arrival")
 var newarrival=document.getElementById("arrival-new")

 arrival.addEventListener("click",function(){
    newarrival.scrollIntoView({ behavior: 'smooth' });
    newarrival.classList.remove("hidden")
 })
 var arrival=document.getElementById("arrival")
 var newarrival=document.getElementById("arrival-new")

 arrival.addEventListener("click",function(){
    newarrival.scrollIntoView({ behavior: 'smooth' });
    newarrival.classList.remove("hidden")
 })


 var wanted=document.querySelector(".wanted")
 var wantedmost=document.getElementById("wanted-most")

 wanted.addEventListener("click",function(){
    wantedmost.scrollIntoView({ behavior: 'smooth' });
    wantedmost.classList.remove("hidden")
 })
 var wanted=document.getElementById("wanted")
 var wantedmost=document.getElementById("wanted-most")

 wanted.addEventListener("click",function(){
    wantedmost.scrollIntoView({ behavior: 'smooth' });
    wantedmost.classList.remove("hidden")
 })

