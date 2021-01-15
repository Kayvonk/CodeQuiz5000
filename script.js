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
        a: "Curly brackets",
        b: "Angle brackets",
        c: "Quotation marks",
        d: "Exclamation marks",
        correctAnswer: "c"
    },
    {
        text: "An ID is indicated by which of the following symbols?",
        a: "%",
        b: "#",
        c: ".",
        d: "none of the above",
        correctAnswer: "b"
    },
    {
        text: "The element selector ul is an abbreviation for which of the following?",
        a: "unused listener",
        b: "unfortunate layer",
        c: "unusually loud",
        d: "unordered list",
        correctAnswer: "d"
    },
    {
        text: "Which of the following can be used in CSS to designate a specific position?",
        a: "position:absolute",
        b: "position:location",
        c: "absolute:position",
        d: "location:abs",
        correctAnswer: "a"
    },
    {
        text: "An array is made by using which of the following symbols?",
        a: "Parantheses",
        b: "Curly brackets",
        c: "Square brackets",
        d: "Angle brackets",
        correctAnswer: "c"
    },
    {
        text: "Which tag is used to indicate a hyperlink in HTML?",
        a: "<hl>",
        b: "<a>",
        c: "<hype>",
        d: "<link>",
        correctAnswer: "b"
    },
    {
        text: "What could you use to round a number up in value?",
        a: "Math.round",
        b: "Math.up",
        c: "Math.ceiling",
        d: "Math.floor",
        correctAnswer: "c"
    },
    {
        text: "Which of the following is NOT an example of a commonly used HTML semantic element?",
        a: "article",
        b: "header",
        c: "footer",
        d: "area",
        correctAnswer: "d"
    },
    {
        text: "All of the following can be used to create a loop in Javascript except for:",
        a: "for",
        b: "for/in",
        c: "while",
        d: "circuit",
        correctAnswer: "d"
    },
    {
        text: "Which of these can be used to position elements on top of each other in CSS?",
        a: "z-index",
        b: "overlap",
        c: "compile",
        d: "float",
        correctAnswer: "a"
    },
    {
        text: "Which could be used to present a user with the ability to type a response?",
        a: "alert",
        b: "confirm",
        c: "prompt",
        d: "reply",
        correctAnswer: "c"
    },
    {
        text: "Which of these is used to display data in the browser's console?",
        a: "console.log()",
        b: "browser.log()",
        c: "console.show()",
        d: "data.log()",
        correctAnswer: "a"
    },
    {
        text: "Which would be used to indicate that two values were equal regardless of their type?",
        a: "=",
        b: "==",
        c: "===",
        d: "====",
        correctAnswer: "c"
    },
    {
        text: "An array can be converted to lowercase by using which of the following?",
        a: "makeLowercase",
        b: "convertCase",
        c: "changeCase",
        d: "toLowercase",
        correctAnswer: "d"
    },
    {
        text: "Which would be used to style an element using Javascript?",
        a: "setAttribute",
        b: "setStyle",
        c: "styleAttribute",
        d: "changeStyle",
        correctAnswer: "a"
    },
    {
        text: "Which would be used to style an element using Javascript?",
        a: "setAttribute",
        b: "setStyle",
        c: "styleAttribute",
        d: "changeStyle",
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
var secondsLeft = questions.length * 10;

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
