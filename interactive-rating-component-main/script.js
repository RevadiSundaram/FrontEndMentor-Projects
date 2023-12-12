const rating = document.querySelectorAll('#rating');
const submitBtn = document.getElementById('submitBtn');
const section = document.getElementById('section');
const paraBtn = document.querySelector('.para-button');

let rateNum = 0;

rating.forEach(function(rate){
    rate.addEventListener('click',function(e){
        rateNum = e.target.textContent;
        console.log(rateNum);
        e.target.style.backgroundColor = 'hsl(25, 97%, 53%)';
        e.target.style.color = 'hsl(0, 0%, 100%)';
    });
});

submitBtn.addEventListener('click',function(){
    
    section.textContent='';
    section.innerHTML += `
    <div class="thanks-container">
    <img src="images/illustration-thank-you.svg" alt="Thank You Image" class="thank-img">
    <div class="rate">
        <p>You selected ${rateNum} out of 5</p>
    </div>
    <h4>Thank You!</h4>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, 
    don’t hesitate to get in touch!</p>
    </div>
    `;
    
});

