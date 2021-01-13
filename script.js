var score = 0

var storeInitials = document.querySelector("#initials");
var submitInitials = document.querySelector("#submit");
var clearInitials = document.querySelector("#clear")
var highscoresSpan = document.querySelector("#highscoresSpan")
var initalsSpan = document.querySelector("#initialsSpan")


function hideOnStart() {
    document.getElementById("questionSelection").style.display = "none";
    document.getElementById("results").style.display = "none";
    document.getElementById("highscores").style.display = "none";
}

hideOnStart()

var questions = [
    {
        text: "A string is indicated by which of the following?",
        a: "Curly brackets",
        b: "Angle brackets",
        c: "Quotation marks",
        d: "Exclamation marks",
        correctAnswer: "c"
    },
    {
        text: "Question2",
        a: "a1",
        b: "a2",
        c: "a3",
        d: "a4",
        correctAnswer: "a"
    },
    {
        text: "Question3",
        a: "a1",
        b: "a2",
        c: "a3",
        d: "a4",
        correctAnswer: "a"
    },
    {
        text: "Question4",
        a: "a1",
        b: "a2",
        c: "a3",
        d: "a4",
        correctAnswer: "a"
    },
    {
        text: "Question5",
        a: "a1",
        b: "a2",
        c: "a3",
        d: "a4",
        correctAnswer: "a"
    },
    {
        text: "Question6",
        a: "a1",
        b: "a2",
        c: "a3",
        d: "a4",
        correctAnswer: "a"
    },
    {
        text: "Question7",
        a: "a1",
        b: "a2",
        c: "a3",
        d: "a4",
        correctAnswer: "a"
    },
    {
        text: "Question8",
        a: "a1",
        b: "a2",
        c: "a3",
        d: "a4",
        correctAnswer: "a"
    },
    {
        text: "Question9",
        a: "a1",
        b: "a2",
        c: "a3",
        d: "a4",
        correctAnswer: "a"
    },
    {
        text: "Question10",
        a: "a1",
        b: "a2",
        c: "a3",
        d: "a4",
        correctAnswer: "a"
    },
    {
        text: "Question11",
        a: "a1",
        b: "a2",
        c: "a3",
        d: "a4",
        correctAnswer: "a"
    },
    {
        text: "Question12",
        a: "a1",
        b: "a2",
        c: "a3",
        d: "a4",
        correctAnswer: "a"
    },
    {
        text: "Question13",
        a: "a1",
        b: "a2",
        c: "a3",
        d: "a4",
        correctAnswer: "a"
    },
    {
        text: "Question14",
        a: "a1",
        b: "a2",
        c: "a3",
        d: "a4",
        correctAnswer: "a"
    },
    {
        text: "Question15",
        a: "a1",
        b: "a2",
        c: "a3",
        d: "a4",
        correctAnswer: "a"
    }
]

var myIndex = 0;
function keepScore() {
    document.getElementById("gameScore").textContent = "Score: " + score
}
keepScore()

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = questions.length * 2;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining.";

        if (secondsLeft === 0 || secondsLeft < 0 || myIndex === 15) {
            document.getElementById("questionSelection").style.display = "none";
            clearInterval(timerInterval);
            document.getElementById("results").style.display = "block";
            keepScore();
        }

    }, 1000);
}





function displayQuestion(index) {
    document.getElementById("questionSelect").textContent = questions[index].text;
    document.getElementById("aSelect").textContent = questions[index].a;
    document.getElementById("bSelect").textContent = questions[index].b;
    document.getElementById("cSelect").textContent = questions[index].c;
    document.getElementById("dSelect").textContent = questions[index].d;
}

displayQuestion(myIndex)

// function endQuiz() {
//     if (myIndex > 14) {
//         document.getElementById("questionSelection").style.display = "none";
//         clearInterval(timerInterval);
//         document.getElementById("results").style.display = "block";
//         keepScore();
//     }
//     else {

//     }
// }


document.getElementById("button1").onclick = function () {
    if (questions[myIndex].correctAnswer === "a") {
        document.getElementById("correctAnswer").textContent = "Correct";
        score++;

    }
    else {
        document.getElementById("correctAnswer").textContent = "Wrong";
        secondsLeft -= 5;
    }

    myIndex++
    displayQuestion(myIndex)

}
document.getElementById("button2").onclick = function () {
    if (questions[myIndex].correctAnswer === "b") {
        document.getElementById("correctAnswer").textContent = "Correct";
        score++
    }
    else {
        document.getElementById("correctAnswer").textContent = "Wrong";
        secondsLeft -= 5;
    }
    myIndex++
    displayQuestion(myIndex)
}
document.getElementById("button3").onclick = function () {
    if (questions[myIndex].correctAnswer === "c") {
        document.getElementById("correctAnswer").textContent = "Correct";
        score++
    }
    else {
        document.getElementById("correctAnswer").textContent = "Wrong";
        secondsLeft -= 5;
    }
    myIndex++
    displayQuestion(myIndex)
}
document.getElementById("button4").onclick = function () {
    if (questions[myIndex].correctAnswer === "d") {
        document.getElementById("correctAnswer").textContent = "Correct";
        score++
    }
    else {
        document.getElementById("correctAnswer").textContent = "Wrong";
        secondsLeft -= 5;
    }
    myIndex++
    displayQuestion(myIndex)
}

function timeUp() {
    if (secondsLeft === 0) {
        document.getElementById("questionSelection").style.display = "none";
    }
}

function hideResults() {
    document.getElementById("results").style.display = "none";
    document.getElementById("highscores").style.display = "block";
}
function hideStartPage() {
    document.getElementById("startPage").style.display = "none";
}

function showQuestionSelection() {

    if (document.getElementById("questionSelection").style.display = "block") {
    }
}



submitInitials.addEventListener("click", function () {
    var highscoreArray = JSON.parse(localStorage.getItem("highscore")) || []
    var initials = storeInitials.value
    var player = {
        initials: initials,
        score: score
    }
    highscoreArray.push(player)
    localStorage.setItem("highscore", JSON.stringify(highscoreArray))
    console.log(highscoreArray)
    for (let i = 0; i < highscoreArray.length; i++) {
        var writeScore = document.createElement("p").innerHTML = highscoreArray[i].score + " ";
        var writeInitials = document.createElement("p").innerHTML = highscoreArray[i].initials + " ";
        initialsSpan.append(writeInitials);
        highscoresSpan.append(writeScore);
    }

})


document.getElementById("clear").onclick = function () {
    localStorage.clear();
    document.getElementById("initialsSpan").style.display = "none";
    document.getElementById("highscoresSpan").style.display = "none";
}


//when last question is answered move to results page