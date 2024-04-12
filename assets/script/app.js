
const login = document.querySelector('.login-button');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');

const acccess = {
  "password": "1234",
  "email": "andre@fakemail.com"
}

localStorage.setItem('credentials', JSON.stringify(acccess));

//Return LocalStorage
function getLocalStorage(){
  return localStorage.getItem('credentials');
}


//Get Values from Input
function getFormData(){
  passwordEntered = passwordInput.value;
  emailEntered = emailInput.value;
  
  let credentials = JSON.parse(getLocalStorage());
  let password = credentials.password;
  let email = credentials.email;

  if(password === passwordEntered && email === emailEntered.toString()){
    window.location.href = "./home.html";
  }
  else{
    console.log('not here');
  }
}




login.addEventListener('click', getFormData);






