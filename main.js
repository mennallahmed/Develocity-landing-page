

const roadmap=document.querySelector(".roadmap-wrapper");
const exchanges=document.querySelector(".exchanges-wrapper"); 
const footer=document.querySelector(".footer-wrapper");

const btn=document.getElementById("btn")


// collaboration slider
var swiper = new Swiper(".slide-content", {
    slidesPerView: 2,
    spaceBetween: 15,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });


fetch('/roadMap.html')
.then(res=>res.text())
.then(data=>roadmap.innerHTML=data)
.then( ()=>{
  ScrollReveal().reveal('.roadmap-header', { delay: 500 , origin:'left'});
  ScrollReveal().reveal('.phase1', { delay: 300 , origin:'top'});
  ScrollReveal().reveal('.phase2', { delay: 700 , origin:'top'});
  ScrollReveal().reveal('.phase3', { delay: 1100 , origin:'top'});
  ScrollReveal().reveal('.phase4', { delay: 2500 , origin:'top'});

  ScrollReveal().reveal('.path1', { delay: 1000 , origin:'top'});
  ScrollReveal().reveal('.path2', { delay: 1500 , origin:'top'});
  ScrollReveal().reveal('.path3', { delay: 2000 , origin:'top'});

  ScrollReveal().reveal('.ellipsePurple, .ellipseYellow, .ellipseBlue', { delay: 2400 , origin:'top', interval:500});
  
  ScrollReveal().reveal('.squareBlue, .squareGreen, .squarePurple', { delay: 2700 , origin:'top', interval:1500});
 
  ScrollReveal().reveal('.rectangleYellow, .rectangleGreen', { delay: 3500 , origin:'top', interval:500});
  
  
} )

fetch('/exchanges.html')
.then(res=>res.text())
.then(data=>exchanges.innerHTML=data)
.then( ()=>{
  ScrollReveal().reveal(' .exchanges-header', { delay: 500 , origin:'left'});
  ScrollReveal().reveal(' .exchange-card', { delay: 600 , origin:'bottom'});
 
  
} )

fetch('/footer.html')
.then(res=>res.text())
.then(data=>footer.innerHTML=data)
.then( ()=>{ 
  const element=document.querySelector(".display-mobile");
  element.scrollLeft = 230;


} )

// animation when scroll 
ScrollReveal().reveal('.collaboration-header, .exchanges-header', { delay: 500 , origin:'left'});


