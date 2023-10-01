//Custom Loader
let myloader = document.querySelector(".custom-loader");
window.addEventListener("load", ()=>{
    myloader.remove();
})

//Mobile Menu
let mymblmenu = document.querySelector(".mbl__menu");
let navlinks = document.querySelector(".header__nav");
let sendbtn = document.querySelector(".sendmsg");

mymblmenu.addEventListener("click", openmenu);  

function openmenu(){
    if(screen.width<768){
        mymblmenu.classList.toggle("active");
        navlinks.classList.toggle("active");
    }
}

sendbtn.addEventListener("click", ()=>{
    alert("Apologies for the inconvenience. The send message feature is currently unavailable as it is undergoing development. Please reach out to me through my official social media accounts for any inquiries or messages. Thank you for your understanding.")
});               

//Copyright Date
const mydate = document.querySelector(".footer__text span");
const myyear = new Date().getFullYear();
mydate.textContent = myyear;

//Animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })
})

const hiddensection = document.querySelectorAll(".hidden");
hiddensection.forEach((e)=>observer.observe(e))