const menubtn = document.getElementById("menu-btn");
const menubar = document.getElementById("menu-bar");
const header = document.getElementById("header");

menubtn.addEventListener('click' , ()=>{
    menubtn.classList.toggle("is-active");
   menubtn.classList.contains("is-active") ? menubar.style.left = "0" : menubar.style.left = "-100%"
})

window.onscroll = () =>{
    menubtn.classList.remove("is-active");
    menubar.style.left = "-100%"

    if(window.pageYOffset > 10 ){
        header.classList.add("sticked")
    }
    else{
        header.classList.remove("sticked")
    }
}