let myloader = document.querySelector(".custom-loader");

window.addEventListener("load", ()=>{
    myloader.style.display = "none";
})


let mymblmenu = document.querySelector(".mbl__menu");
let navlinks = document.querySelector(".header__nav");

mymblmenu.addEventListener("click", openmenu);

function openmenu(){
    if(screen.width<768){
    mymblmenu.classList.toggle("active");
    navlinks.classList.toggle("active");
    }
}
