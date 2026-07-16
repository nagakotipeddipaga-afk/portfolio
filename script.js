/*==========================
PORTFOLIO SCRIPT
==========================*/

// Typing Effect
const typing = document.getElementById("typing");

const words = [
    "Python Developer",
    "Machine Learning Enthusiast",
    "Web Developer",
    "Frontend Designer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);
    } else {

        typing.textContent = currentWord.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentWord.length + 1) {

        deleting = true;
        speed = 1500;

    } else if (deleting && charIndex === 0) {

        deleting = false;
        wordIndex++;

        if (wordIndex >= words.length) {
            wordIndex = 0;
        }

        speed = 250;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


/*==========================
ACTIVE NAVBAR
==========================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");
        }

    });

});


/*==========================
HEADER EFFECT
==========================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.padding = "15px 8%";
        header.style.background = "rgba(5,10,25,.88)";

    } else {

        header.style.padding = "20px 8%";
        header.style.background = "rgba(10,15,35,.60)";
    }

});


/*==========================
REVEAL ANIMATION
==========================*/

const revealItems = document.querySelectorAll(
".about-card,.skill-card,.project-card,.service-card,.achievement-card,.stat-box,.contact-card,.timeline-item"
);

function revealOnScroll() {

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }

    });

}

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = ".8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/*==========================
PROJECT CARD TILT
==========================*/

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = (y - rect.height / 2) / 18;
        const rotateY = (rect.width / 2 - x) / 18;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/*==========================
SMOOTH SCROLL
==========================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});
/*=========================================
SCROLL PROGRESS BAR
=========================================*/

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "4px";
progressBar.style.width = "0%";
progressBar.style.background =
"linear-gradient(90deg,#00d4ff,#7b2ff7)";
progressBar.style.zIndex = "99999";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

const scrollTop = document.documentElement.scrollTop;

const scrollHeight =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

const progress = (scrollTop / scrollHeight) * 100;

progressBar.style.width = progress + "%";

});


/*=========================================
BACK TO TOP BUTTON
=========================================*/

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "20px";
topBtn.style.color = "#fff";
topBtn.style.background =
"linear-gradient(135deg,#00d4ff,#7b2ff7)";
topBtn.style.boxShadow =
"0 0 20px rgba(0,212,255,.4)";
topBtn.style.zIndex = "9999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

if(window.scrollY > 300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,
behavior:"smooth"

});

};


/*=========================================
COUNTER ANIMATION
=========================================*/

const counters=document.querySelectorAll(
".achievement-card h1,.stat-box h1"
);

const speed=70;

function runCounter(){

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

if(isNaN(target)) return;

let count=0;

const update=()=>{

count+=Math.ceil(target/speed);

if(count<target){

counter.innerText=count+"+";

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

});

}

const stats=document.querySelector("#stats");

if(stats){

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

runCounter();

observer.disconnect();

}

});

});

observer.observe(stats);

}


/*=========================================
FLOATING HERO ICON
=========================================*/

const icon=document.querySelector(".circle");

if(icon){

setInterval(()=>{

icon.style.transform=
`rotate(${Math.random()*15-7}deg)
scale(${1+Math.random()*0.05})`;

},2000);

}


/*=========================================
PARALLAX BACKGROUND
=========================================*/

const bg=document.querySelector(".bg-animation");

window.addEventListener("mousemove",e=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

bg.style.transform=
`translate(${x*20}px,${y*20}px) scale(1.08)`;

});


/*=========================================
NAVBAR LINK HOVER EFFECT
=========================================*/

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("mouseenter",()=>{

link.style.transform="translateY(-2px)";

});

link.addEventListener("mouseleave",()=>{

link.style.transform="translateY(0px)";

});

});


/*=========================================
BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".btn1,.btn2,.project-btn,.hire-btn")
.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(
button.clientWidth,
button.clientHeight
);

circle.style.width=diameter+"px";
circle.style.height=diameter+"px";

circle.style.position="absolute";
circle.style.borderRadius="50%";
circle.style.background="rgba(255,255,255,.4)";
circle.style.transform="scale(0)";
circle.style.animation="ripple .6s linear";
circle.style.pointerEvents="none";

const rect=button.getBoundingClientRect();

circle.style.left=
e.clientX-rect.left-diameter/2+"px";

circle.style.top=
e.clientY-rect.top-diameter/2+"px";

button.style.position="relative";
button.style.overflow="hidden";

button.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});


/*=========================================
PRELOADER FADE
=========================================*/

window.addEventListener("load",()=>{

document.body.style.opacity="0";

setTimeout(()=>{

document.body.style.transition="opacity .8s";
document.body.style.opacity="1";

},100);

});


/*=========================================
CONSOLE MESSAGE
=========================================*/

console.log("%cWelcome to Nageswararao Portfolio",
"font-size:20px;color:#00d4ff;font-weight:bold;");

console.log("%cDesigned using HTML, CSS & JavaScript",
"color:#7b2ff7;font-size:14px;");