var contactBtn = document.querySelector ('.contact-btn');
var modalCon = document.querySelector ('.modal-con')

contactBtn.addEventListener ('click', function(event) {
    event.preventDefault();
    modalCon.classList.add ('con-active');

});