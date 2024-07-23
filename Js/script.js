//Custom Loader
let myloader = document.querySelector(".custom-loader");
const myForm = document.getElementById('contact__form');
window.addEventListener("load", ()=>{
    myloader.remove();
    myForm.reset(); 
})

//Mobile Menu
let mymblmenu = document.querySelector(".mbl-menu-icon");
let navlinks = document.querySelector(".header__nav");
let sendbtn = document.querySelector(".sendmsg");
const line = document.querySelectorAll(".line");

mymblmenu.addEventListener("click", openmenu);  

function openmenu(){
    if(screen.width<768){
    line.forEach(line=>line.classList.toggle("rotate"))
        mymblmenu.classList.toggle("active");
        navlinks.classList.toggle("active");
    }
}

//Copyright Date
const mydate = document.querySelector(".footer__text span");
const myyear = new Date().getFullYear();
mydate.textContent = myyear;

//Animation
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }
    })
})

const hiddensection = document.querySelectorAll(".hidden");
hiddensection.forEach((e)=>observer.observe(e))

// Captcha
let num1, num2;

function generateCaptcha() {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    document.getElementById('num1').textContent = num1;
    document.getElementById('num2').textContent = num2;
}

function validateCaptcha(userAnswer) {
    const correctAnswer = num1 + num2;
    return userAnswer === correctAnswer;
}

document.addEventListener('DOMContentLoaded', generateCaptcha);

myForm.addEventListener('submit', function(event) {
    const userAnswer = parseInt(document.getElementById('captcha').value);

    if (!validateCaptcha(userAnswer)) {
        alert('CAPTCHA validation failed. Please try again.');
        event.preventDefault(); 
        document.getElementById('captcha').value = '';
        generateCaptcha(); 
    }
});