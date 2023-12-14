const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submitBtn = document.getElementById("submit");

console.log(lastName);


submitBtn.addEventListener('click',function(){
    console.log("firstName");
    if(firstName == ''){
        console.log('first name should not be empty');
        alert('first name should not be empty');
    }
});
