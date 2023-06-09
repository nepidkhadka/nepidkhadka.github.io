let myloader = document.querySelector(".custom-loader");

window.addEventListener("load", ()=>{
    myloader.style.display = "none";
})


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
