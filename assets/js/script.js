window.addEventListener("DOMContentLoaded", (event) => {

    const contactBtn = document.getElementById('contact-btn');
    const modalCon = document.getElementById('modal-contact')
    const modalClose = document.querySelector('.modal-close')
    const rulesBtn = document.getElementById('rules-btn');
    const modalRules = document.getElementById('modal-rules')
    const modalCloseRules = document.querySelector('.modal-close-rules')

    contactBtn.addEventListener('click', function(event) {
        event.preventDefault();
        modalCon.classList.add('con-active');
    });

    rulesBtn.addEventListener('click', function(event) {
        event.preventDefault();
        modalRules.classList.add('con-active'); 
    });

    modalClose.addEventListener('click', function(){
        modalCon.classList.remove('con-active');
    });

    modalCloseRules.addEventListener('click', function(){
        modalRules.classList.remove('con-active'); 
    });

});