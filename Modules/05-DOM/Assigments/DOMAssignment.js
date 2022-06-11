// when click add btn, show the notificaiton 
const addBtn = document.querySelector('.addbtn');
const exitBtn = document.querySelector('.fa-xmark');
const notification = document.querySelector('.notification');

addBtn.addEventListener('click', e => {
    e.preventDefault()

    notification.style.display = 'block'
    notification.style.display = 'flex'
});

//when click the x mark, hide the notification; return to original state, hide notification


exitBtn.addEventListener('click', e =>{
    e.preventDefault()

    notification.style.display = 'none'
});

