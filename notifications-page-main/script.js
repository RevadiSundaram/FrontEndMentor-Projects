const numOfUnreadMsg = document.getElementById('numMsg');
let count = 3;
const markAsRead = document.getElementById('markRead');
const notificationMsg = document.querySelectorAll('.card');
const cardComponent  =document.querySelector('.card');
const redIcon = document.querySelectorAll('.icon');

markAsRead.addEventListener('click' , function(){
    numOfUnreadMsg.textContent = 0;
    for(let i=0; i<notificationMsg.length; i++){
        notificationMsg[i].style.backgroundColor = 'hsl(0, 0%, 100%)';
        redIcon[i].remove();
    }
    // for(let i=0; redIcon.length; i++){
        
    // }
});

notificationMsg.forEach(function (msg, index){
    msg.addEventListener('click',function(){
        msg.style.backgroundColor = 'hsl(0, 0%, 100%)';
        redIcon[index].remove();
        count--;
        numOfUnreadMsg.textContent = count;
        
    })
})
