

const roadmap=document.querySelector(".roadmap-wrapper");
const exchanges=document.querySelector(".exchanges-wrapper"); 
const footer=document.querySelector(".footer-wrapper");
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

fetch('/exchanges.html')
.then(res=>res.text())
.then(data=>exchanges.innerHTML=data)

fetch('/footer.html')
.then(res=>res.text())
.then(data=>footer.innerHTML=data)
