let bars = document.getElementById('bars');
let navList = document.getElementById('nav-list');

bars.addEventListener('click', ()=>{
    if(navList.style.left === "-300px"){
        navList.style.left = "0px";
    }
    else{
        navList.style.left = "-300px"
    }
    navList.style.transition = "left 0.5s ease";
});