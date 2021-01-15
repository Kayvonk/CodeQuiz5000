var score = 0
var storeInitials = document.querySelector("#initials");
var submitInitials = document.querySelector("#submit");
var clearInitials = document.querySelector("#clear")
var highscoresSpan = document.querySelector("#highscoresSpan")
var initalsSpan = document.querySelector("#initialsSpan")
var startButton = document.querySelector("#start")

function hideOnStart() {
    document.getElementById("questionSelection").style.display = "none";
    document.getElementById("results").style.display = "none";
    document.getElementById("highscores").style.display = "none";
}
hideOnStart()

startButton.addEventListener("click", function () {
    hideStartPage();
    showQuestionSelection();
    setTime();
    displayQuestion(myIndex)
})

var questions = [
    {
        text: "A string is indicated by which of the following?",
        a: "A) Curly brackets",
        b: "B) Angle brackets",
        c: "C) Quotation marks",
        d: "D) Exclamation marks",
        correctAnswer: "c"
    },
    {
        text: "An ID is indicated by which of the following symbols?",
        a: "A) %",
        b: "B) #",
        c: "C) $",
        d: "D) none of the above",
        correctAnswer: "b"
    },
    {
        text: "The element selector ul is an abbreviation for which of the following?",
        a: "A) unused listener",
        b: "B) unfortunate layer",
        c: "C) unusually loud",
        d: "D) unordered list",
        correctAnswer: "d"
    },
    {
        text: "Which of the following can be used in CSS to designate a specific position?",
        a: "A) position:absolute",
        b: "B) position:location",
        c: "C) absolute:position",
        d: "D) location:abs",
        correctAnswer: "a"
    },
    {
        text: "An array is made by using which of the following symbols?",
        a: "A) Parantheses",
        b: "B) Curly brackets",
        c: "C) Square brackets",
        d: "D) Angle brackets",
        correctAnswer: "c"
    },
    {
        text: "Which tag is used to indicate a hyperlink in HTML?",
        a: "A) <hl>",
        b: "B) <a>",
        c: "C) <hype>",
        d: "D) <link>",
        correctAnswer: "b"
    },
    {
        text: "What could you use to round a number up in value?",
        a: "A) Math.round",
        b: "B) Math.up",
        c: "C) Math.ceiling",
        d: "D) Math.floor",
        correctAnswer: "c"
    },
    {
        text: "Which of the following is NOT an example of a commonly used HTML semantic element?",
        a: "A) article",
        b: "B) header",
        c: "C) footer",
        d: "D) area",
        correctAnswer: "d"
    },
    {
        text: "All of the following can be used to create a loop in Javascript except for:",
        a: "A) for",
        b: "B) for/in",
        c: "C) while",
        d: "D) circuit",
        correctAnswer: "d"
    },
    {
        text: "Which of these can be used to position elements on top of each other in CSS?",
        a: "A) z-index",
        b: "B) overlap",
        c: "C) compile",
        d: "D) float",
        correctAnswer: "a"
    },
    {
        text: "Which could be used to present a user with the ability to type a response?",
        a: "A) alert",
        b: "B) confirm",
        c: "C) prompt",
        d: "D) reply",
        correctAnswer: "c"
    },
    {
        text: "Which of these is used to display data in the browser's console?",
        a: "A) console.log()",
        b: "B) browser.log()",
        c: "C) console.show()",
        d: "D) data.log()",
        correctAnswer: "a"
    },
    {
        text: "Which would be used to indicate that two values were equal regardless of their type?",
        a: "A) =",
        b: "B) ==",
        c: "C) ===",
        d: "D) ====",
        correctAnswer: "c"
    },
    {
        text: "An array can be converted to lowercase by using which of the following?",
        a: "A) makeLowercase",
        b: "B) convertCase",
        c: "C) changeCase",
        d: "D) toLowercase",
        correctAnswer: "d"
    },
    {
        text: "Which would be used to style an element using Javascript?",
        a: "A) setAttribute",
        b: "B) setStyle",
        c: "C) styleAttribute",
        d: "D) changeStyle",
        correctAnswer: "a"
    },
    {
        text: "Which would be used to style an element using Javascript?",
        a: "A) setAttribute",
        b: "B) setStyle",
        c: "C) styleAttribute",
        d: "D) changeStyle",
        correctAnswer: ""
    }
]

var myIndex = 0;
function keepScore() {
    document.getElementById("gameScore").textContent = "Score: " + score
}
keepScore()

var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");
var secondsLeft = questions.length * 9.375;

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

document.getElementById("button1").onclick = function () {
    if (myIndex === 15) {
        document.getElementById("questionSelection").style.display = "none";
    }
    else if (questions[myIndex].correctAnswer === "a") {
        document.getElementById("correctAnswer").textContent = "Correct";
        score++;
        myIndex++
        displayQuestion(myIndex)
    }
    else {
        document.getElementById("correctAnswer").textContent = "Wrong";
        secondsLeft -= 5;
        myIndex++
        displayQuestion(myIndex)
    }
}

document.getElementById("button2").onclick = function () {
    if (myIndex === 15) {
        document.getElementById("questionSelection").style.display = "none";
    }
    else if (questions[myIndex].correctAnswer === "b") {
        document.getElementById("correctAnswer").textContent = "Correct";
        score++;
        myIndex++
        displayQuestion(myIndex)
    }
    else {
        document.getElementById("correctAnswer").textContent = "Wrong";
        secondsLeft -= 5;
        myIndex++
        displayQuestion(myIndex)
    }
}

document.getElementById("button3").onclick = function () {
    if (myIndex === 15) {
        document.getElementById("questionSelection").style.display = "none";
    }
    else if (questions[myIndex].correctAnswer === "c") {
        document.getElementById("correctAnswer").textContent = "Correct";
        score++;
        myIndex++
        displayQuestion(myIndex)
    }
    else {
        document.getElementById("correctAnswer").textContent = "Wrong";
        secondsLeft -= 5;
        myIndex++
        displayQuestion(myIndex)
    }
}

document.getElementById("button4").onclick = function () {
    if (myIndex === 15) {
        document.getElementById("questionSelection").style.display = "none";
    }
    else if (questions[myIndex].correctAnswer === "d") {
        document.getElementById("correctAnswer").textContent = "Correct";
        score++;
        myIndex++
        displayQuestion(myIndex)
    }
    else {
        document.getElementById("correctAnswer").textContent = "Wrong";
        secondsLeft -= 5;
        myIndex++
        displayQuestion(myIndex)
    }
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
    document.getElementById("questionSelection").style.display = "block"

}

submitInitials.addEventListener("click", function () {
    var initials = storeInitials.value
    if (storeInitials.value.length == "" || storeInitials.value.length > 3) {
        alert("Please enter your initials \nLength limit: 1 to 3 characters");
    }
    else {
        onclick = "hideResults()"
        hideResults();
        var highscoreArray = JSON.parse(localStorage.getItem("highscore")) || []
        var player = {
            initials: initials,
            score: score
        }
        highscoreArray.push(player);
        localStorage.setItem("highscore", JSON.stringify(highscoreArray));

        for (let i = 0; i < highscoreArray.length; i++) {
            var writeScore = document.createElement("p").innerHTML = highscoreArray[i].score + " ";
            var writeInitials = document.createElement("p").innerHTML = highscoreArray[i].initials + " ";
            initialsSpan.append(writeInitials);
            highscoresSpan.append(writeScore);
        }
    }
})

document.getElementById("clear").onclick = function () {
    localStorage.clear();
    document.getElementById("initialsSpan").style.display = "none";
    document.getElementById("highscoresSpan").style.display = "none";
}
