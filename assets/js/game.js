

var score = 0
var question = 0

document.getElementById("score").innerHTML=score


function setQuestion(questionNumber){
    document.getElementById("question").innerHTML = questionText[questionNumber]
    document.getElementById("ansBox1").innerHTML = ansBoxOne[questionNumber]
    document.getElementById("ansBox2").innerHTML = ansBoxTwo[questionNumber]
    document.getElementById("ansBox3").innerHTML= ansBoxThree[questionNumber]
    
}

var questionText = ["Q.1. ‘Look at the castle over …..', Frank said.", "Q.2. ….. are 100 centimetres in a metre.", "Q.3. It was ….. turn to ride the rollercoaster.", "Q.4. I like horses, ….. my favourite animal.", "Q.5. It’s …… birthday tomorrow, don’t forget.", "Q.6. How many biscuits are ….. in the jar?", "Q.7.‘You can borrow those boots,’ Mary said. ‘It’s ok, ….. mine.’", "Q.8. ‘….. hair is long and black.’", "Q.9. ‘How many questions are …. left?’", "Q.10. ‘Anyone who finishes this spelling challenge has done …. best.’"]
var ansBoxOne = ["Their", "Their", "Their", "Their", "Their", "Their", "Their", "Their", "Their", "Their"]
var ansBoxTwo = ["There", "There", "There", "There", "There", "There", "There", "There", "There", "There"]
var ansBoxThree = ["They're", "They're", "They're", "They're", "They're", "They're", "They're", "They're", "They're", "They're"]
var correctAnswers = [2, 2, 1, 3, 1, 2, 3, 1, 2, 1]
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

    

    var modalEnd = document.getElementById ('modal-end')
var modalClose = document.querySelector ('.modal-close-end')
var modalHome = document.querySelector ('.modal-home')

    if (question == questionEnd){
     
    
    
        modalEnd.classList.add ('con-active');
    
    };
    
    

    modalHome.addEventListener('click', function(){
        modalEnd.classList.remove('con-active');
        location.reload()
        window.location.href = '/index.html'
    });

}
    
    







