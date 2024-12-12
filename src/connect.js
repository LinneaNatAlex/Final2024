const menuLinks = document.querySelector('.navbar__menu');
const hamburgerMen = document.querySelector('#mobile-screen');
const singleForm = document.querySelector('.single-input');
const emailInput = document.querySelector ('#e-mail');
const contactInformation = document.querySelector ('.contact_information-form');
const firstName = document.querySelector ('#firstname');
const companyName = document.querySelector ('#companyName');
const emailAdress = document.querySelector ('#emailText');
const phoneNumber = document.querySelector ('#phone');
const birthDate = document.querySelector ('#date');
const textBox = document.querySelector ('#textarea');

const submitions = []
const Connect = []

singleForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const submition = {
        id: Date.now(),
        email: emailInput.value,
    };
   
    submitions.push(submition);
    console.log(submitions);
    emailInput.value =''; /*Empty the inputfeeld*/
});

contactInformation.addEventListener('submit', (e) => {
    e.preventDefault();

    const register = {
        id: Date.now(),
        Name: firstName.value,
        ComName: companyName.value,
        Email: emailAdress.value,
        Dob: birthDate.value,
        Boxtext: textBox.value,
    };
   
    Connect.push(register);

    localStorage.setItem('firstname', firstName.value);
    localStorage.setItem('companyname', companyName.value);
    localStorage.setItem('email', emailAdress.value);
    localStorage.setItem('DOB', birthDate.value);
    localStorage.setItem('textbox', textBox.value);
    
});

console.log(localStorage);



const mobileMenu = () =>{
    hamburgerMen.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

hamburgerMen.addEventListener('click', mobileMenu);