var contactBtn = document.querySelector ('.contact-btn');
var modalCon = document.querySelector ('.modal-con')
var modalClose = document.querySelector ('.modal-close')

contactBtn.addEventListener ('click', function(event) {
    event.preventDefault();
    modalCon.classList.add ('con-active');

});

modalClose.addEventListener('click', function(){
    modalCon.classList.remove('con-active');
});