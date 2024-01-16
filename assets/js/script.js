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

 /* Modal for rules page need to look at why it isnt working. Changing the modalRules var stopped contact form coming up but now nothing appears and ther
 is a error in dev tools. Check this next. */

 var rulesBtn = document.querySelector ('.rules-btn');
 var modalRules = document.querySelector ('.modal-rules')

 rulesBtn.addEventListener ('click', function(event) {
    console.log ("Hello")
    event.preventDefault();
    modalRules.classList.add ('con-active'); 
 });
