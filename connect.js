const singleForm = document.querySelector('.single-input');
const emailInput = document.querySelector ('#e-mail');
const contactInformation = document.querySelector ('.contact_information-form');
const firstName = document.querySelector ('.first__name');
const companyName = document.querySelector ('.company__name');
const emailAdress = document.querySelector ('.email__adress');
const phoneNumber = document.querySelector ('.phone__number');
const birthDate = document.querySelector ('.date__birth');
const textBox= document.querySelector ('.text__box');
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
        Boxtext:textBox.value,
    };
   
    Connect.push(register);
    console.log(Connect);
     
    firstName.value ='';
    companyName.value ='';
    emailAdress.value ='';
    birthDate.value ='';
    textBox.value ='';
});

