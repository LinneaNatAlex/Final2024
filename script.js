const hamburgerMen = document.querySelector('#mobile-screen');
const submitQuestionsButton = document.querySelector(".submit__questions-button");
const menuLinks = document.querySelector('.navbar__menu');
const nextBtn = document.querySelector('#next-btn')
const prevBtn = document.querySelector('#prev-btn')
const imageSlide = document.querySelectorAll(".slides")
const ansWers = document.querySelectorAll('.ans')

let i = 0;


submitQuestionsButton.addEventListener ('click',()=>{
    let totalScore = 0;
    document.querySelectorAll(".placement__quiz input[type='radio']:checked")
    .forEach(answer => {totalScore += +answer.value;
    });
    
    ansWers.forEach(answer =>{
        answer.classList.add ('hidden')
    });

    if (totalScore>= 0 && totalScore < 4){
        ansWers[0].classList.remove ('hidden');
    }
    if (totalScore>= 4 && totalScore < 8){
        ansWers[1].classList.remove ('hidden');
    }
    if (totalScore>= 8 && totalScore < 12){
        ansWers[2].classList.remove ('hidden');
    }
    if (totalScore>= 12 && totalScore < 16){
        ansWers[3].classList.remove ('hidden');
    }
});


    
const mobileMenu = () =>{
    hamburgerMen.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

hamburgerMen.addEventListener('click', mobileMenu);

function viewImage (index) {
    imageSlide.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}


nextBtn.addEventListener('click', ()=> {
    i++; //++ increases the index with one.
    if (i >= imageSlide.length){
        i = 0; //if the the index is higher than the image slide count then go back to the start!
    }
    viewImage(i);
});


prevBtn.addEventListener('click', () => {
    i--;
    if (i < 0 ){
        i = imageSlide.length -1;
    }
    viewImage(i);
});

viewImage(i);
