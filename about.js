const menuLinks = document.querySelector('.navbar__menu');
const accordian = document.querySelector('.accordian-tab');
const titleCont = document.querySelectorAll('.accordion__title-container');
const accordDisc = document.querySelectorAll('.accordion__description-container');
const accorToggleLogo = document.querySelectorAll('.arrowLogo');
const hamburgerMen = document.querySelector('#mobile-screen');

titleCont.forEach((title, index)=>{
    title.addEventListener('click',()=>{
      accordDisc.forEach(decription => {
        accordDisc[index].classList.toggle('accordion__description-container--active');
      });
      accorToggleLogo[index].classList.toggle('rotate-arrow');
    });
});

const mobileMenu = () =>{
    hamburgerMen.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

hamburgerMen.addEventListener('click', mobileMenu);

