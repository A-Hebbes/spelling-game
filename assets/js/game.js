/* Support for game.JS provided by Ollie Grubb. Stack Overflow and Chat GPT used to help find bugs */

var score = 0
var question = 0
document.getElementById("score").innerHTML=score

function setQuestion(questionNumber){
    document.getElementById("question").innerHTML = questionText[questionNumber]
    document.getElementById("ansBox1").innerHTML = ansBoxOne[questionNumber]
    document.getElementById("ansBox2").innerHTML = ansBoxTwo[questionNumber]
    document.getElementById("ansBox3").innerHTML= ansBoxThree[questionNumber]
    
}

var questionText = ["Question1", "Question 2", "Question 3"]
var ansBoxOne = ["Their", "Their", "Their"]
var ansBoxTwo = ["There", "There", "There"]
var ansBoxThree = ["They're", "They're", "They're"]
var correctAnswers = [1, 2, 3]
var questionEnd = questionText.length 

setQuestion(question)


function answerGuess(buttonNumber){


    

    if (buttonNumber == correctAnswers[question]) {
        console.log("True")
        document.getElementById ("score").innerText = ++score;
    }

    else {
        console.log("False")
    }

    ++question
    console.log(question)
    setQuestion(question)

    if (question == questionEnd){
     
    var modalCon = document.querySelector ('.modal-con')
    var modalClose = document.querySelector ('.modal-close')
    var modalHome = document.querySelector ('.modal-home')
    
        modalCon.classList.add ('con-active');
    
    };
    
    /* location.reload advice gained from W3C page https://www.w3schools.com/jsref/met_loc_reload.asp#:~:text=Window%20location.reload()&text=The%20reload()%20method%20reloads,reload%20button%20in%20your%20browser.*/

    modalHome.addEventListener('click', function(){
        modalCon.classList.remove('con-active');
        location.reload()
        window.location.href = '/index.html'
    });

}
    
    







