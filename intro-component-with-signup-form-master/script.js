const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit");
const form = document.getElementById("signup");

const errorElement = document.getElementsByClassName('span');


submitBtn.addEventListener('click', function(e){
    e.preventDefault();
    if(firstName.value == ''){
        // console.log(firstName || "first");
            firstName.classList.add('border');
            errorElement[0].textContent = "First Name cannot be empty";
            // console.log(errorElement.textContent);
       }
    if(lastName.value == ''){
        // lastName.textContent += `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>`;
        lastName.classList.add('border');
        errorElement[1].textContent = "Last Name cannot be empty";
    }
    if(password.value == ''){
        // lastName.textContent += `<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><circle fill="#FF7979" cx="12" cy="12" r="12"/><rect fill="#FFF" x="11" y="6" width="2" height="9" rx="1"/><rect fill="#FFF" x="11" y="17" width="2" height="2" rx="1"/></g></svg>`;
        password.classList.add('border');
        errorElement[3].textContent = "Password cannot be empty";
    }
    console.log(validateEmail(email.value));
    if(email.value != validateEmail(email.value)){
        email.value = '';
        email.value = 'email@email.com';
        email.style.color = 'hsl(0, 100%, 74%)';
        email.classList.add('border');
        errorElement[2].textContent = "Looks like this is not an email";
    }
    
})
function validateEmail(email){
    let regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}

  
    

