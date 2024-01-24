var contactBtn = document.querySelector ('.contact-btn');
var modalCon = document.getElementById ('modal-contact')
var modalClose = document.querySelector ('.modal-close')
var rulesBtn = document.querySelector ('.rules-btn');
var modalRules = document.getElementById ('modal-rules')
var modalCloseRules = document.querySelector ('.modal-close-rules')

contactBtn.addEventListener ('click', function(event) {
    event.preventDefault();
    modalCon.classList.add ('con-active');

});

 
 rulesBtn.addEventListener ('click', function(event) {
    event.preventDefault();
    modalRules.classList.add ('con-active'); 
    
 });

 modalClose.addEventListener('click', function(){
    modalCon.classList.remove('con-active');
    
});

modalCloseRules.addEventListener('click', function(){
modalRules.classList.remove('con-active');
    
});

 
