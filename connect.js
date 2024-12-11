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



