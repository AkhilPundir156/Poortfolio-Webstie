// Show side bar
const navMenu = document.getElementById('sidebar'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// sidebar show
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add('show-sidebar')
    })
}
// sidebar hidden
if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove('show-sidebar')
    })
}
// Skills tabs
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab=> {
        tab.addEventListener("click", ()=>{
            const target = document.querySelector(tab.dataset.target)

            tabContent.forEach(tabContents =>{
                tabContents.classList.remove('skills__active')
            })

            target.classList.add('skills__active')  

            tabs.forEach(tab =>{
                tab.classList.remove('skills__active')
            })

            tab.classList.add('skills__active') 
 
        })
    })

//mixitup filter portfolio
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
}); 
// link active work
const linkWork = document.querySelectorAll('.work__item');
function activeWork(){
    linkWork.forEach(l=> l.classList.remove('active-work'));
    this.classList.add('active-work')
}
linkWork.forEach(l=>l.addEventListener("click",activeWork));

// Work popup  problem before 1:54
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("work__button")){
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle('open');
}
document.querySelector(".portfolio__popup-close").addEventListener("click",togglePortfolioPopup)

 function portfolioItemDetails(portfolioItem){
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").innerHTML =portfolioItem.querySelector(".work__title").innerHTML;
    document.querySelector(".portfolio__popup-body").innerHTML =portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}
// services modal
const modalViews = document.querySelectorAll('.services__modal'),
    modelBtns = document.querySelectorAll('.services__button'),
    modalCloses  = document.querySelectorAll('.services__modal-close')

let modal = function(modalclick){
    modalViews[modalclick].classList.add('active-modal')
}
modelBtns.forEach((modelBtn , i) => {
    modelBtn.addEventListener('click', () => {
        modal(i)
    })
})
modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener("click", () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})
//Swiper testimonial
let swiper = new Swiper(".testimonials__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      },
  }); 

// input animation
const inputs =document.querySelectorAll(".input");
function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}
function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",blurFunc);
})
// Scroll section active link
const section = document.querySelectorAll("section[id]");
window.addEventListener("scroll",navHighlighter);

function navHighlighter(){
    let scrollY = window.pageYOffset;
    section.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");
        if(scrollY>sectionTop && scrollY <=sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.add("active-link")
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove("active-link")

        }
    })
}

// contact email sending js
// function SendMail(){
//     var params = {
//         from_name : document.getElementById("fullName").value,
//         email_id : document.getElementById("email_id").value,
//         mobile_no : document.getElementById("tel_no").value,
//         message : document.getElementById("message").value,
//     }
//     emailjs.send("service_kcy5tk6","template_xyuce4m",params).then(function (res){
//         alert("Success!" + res.status);
//     })
// }



