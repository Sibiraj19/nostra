// window.addEventListener('scroll',function(){
//     let hidden= document.querySelector(".hidden")
//     // let visible=document.querySelector(".visible")
//     if(window.scrollY>100)
//     {
//         hidden.classList.add("visible")
//         hidden.classList.remove("hidden")
//     }
// })

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


 const checkboxes = document.querySelectorAll('input[type="checkbox"]')
for ( count = 0; count < checkboxes.length; count++) {
    checkboxes[count].addEventListener('change', filterShirts)
}

function filterShirts() {
   const selectedTags = []
   for ( count = 0; count < checkboxes.length; count++) {
       if (checkboxes[count].checked) {
           selectedTags.push(checkboxes[count].value)
       }
   }

   const shirts = document.querySelectorAll('.shirt');
   for (let count = 0; count < shirts.length; count++) {
       const tags = shirts[count].querySelector('tags').textContent.split(',');
       let showShirt = false;
       for (let i = 0; i < selectedTags.length; i++) {
           if (tags.indexOf(selectedTags[i]) !== -1) {
               showShirt = true;
           }
       }
       shirts[count].style.display = showShirt ? 'block' : 'none';
   }
   
}