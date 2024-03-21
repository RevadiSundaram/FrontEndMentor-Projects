document.getElementById("tog").addEventListener("change", function(){
    if(document.getElementById("tog").checked){
        document.getElementById("basic").textContent = 19.99;
        document.getElementById("prof").textContent = 24.99;
        document.getElementById("master").textContent = 39.99;
    }
    else{
        document.getElementById("basic").textContent = 199.99;
        document.getElementById("prof").textContent = 249.99;
        document.getElementById("master").textContent = 399.99;
    }
});


