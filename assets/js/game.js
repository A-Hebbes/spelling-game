//Function to set question//

function setQuestion(questionNumber){
    document.getElementById("question").innerHTML = questionText[questionNumber];
    document.getElementById("ansBox1").innerHTML = ansBoxOne[questionNumber];
    document.getElementById("ansBox2").innerHTML = ansBoxTwo[questionNumber];
    document.getElementById("ansBox3").innerHTML= ansBoxThree[questionNumber];   
}
//Function to progress the game and give feedback to user when answer button is pressed//

function answerGuess(buttonNumber){
    var tick = document.getElementById('tick-answer-indicator');
    var cross = document.getElementById('cross-answer-indicator');

    if (buttonNumber == correctAnswers[question]) {
        document.getElementById ("score").innerText = ++score;
        tick.classList.add('visible');
        setTimeout(function(){
            tick.classList.remove('visible');
        }, 1500);
    }
    else {
        cross.classList.add('visible');
        setTimeout(function(){
            cross.classList.remove('visible');
        }, 1500);
    }

    ++question;
    setQuestion(question);

    //Check it is end game. If it is the end bring up modal for game end//

    var modalEnd = document.getElementById ('modal-end');
    var modalHome = document.querySelector ('.modal-home');

    if (question == questionEnd){
        document.getElementById("end-score").innerHTML= 'You got: ' + score;
        modalEnd.classList.add ('con-active');
    }
    
    modalHome.addEventListener('click', function(){
        modalEnd.classList.remove('con-active');
        location.href = ('index.html');
        location.reload();
    });

}

//game data//

var score = 0;
var question = 0;
var questionText = ["Q.1. 'Look at the castle over …..', Frank said.", "Q.2. ….. are 100 centimetres in a metre.", "Q.3. It was ….. turn to ride the rollercoaster.", "Q.4. I like horses, ….. my favourite animal.", "Q.5. It's …… birthday tomorrow, don't forget.", "Q.6. How many biscuits are ….. in the jar?", "Q.7.‘You can borrow those boots,' Mary said. ‘It's ok, ….. mine.'", "Q.8. ‘….. hair is long and black.'", "Q.9. ‘How many questions are …. left?'", "Q.10. ‘Anyone who finishes this spelling challenge has done …. best.'"];
var ansBoxOne = ["Their", "Their", "Their", "Their", "Their", "Their", "Their", "Their", "Their", "Their"];
var ansBoxTwo = ["There", "There", "There", "There", "There", "There", "There", "There", "There", "There"];
var ansBoxThree = ["They're", "They're", "They're", "They're", "They're", "They're", "They're", "They're", "They're", "They're"];
var correctAnswers = [2, 2, 1, 3, 1, 2, 3, 1, 2, 1];
var questionEnd = questionText.length;

//Begin game on page load//

window.addEventListener("DOMContentLoaded", (event) => {
    setQuestion(question);
});






