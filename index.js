//Kyle

const questions = [
    {
        question: "How many days in a week ?",
        optionA: "10 days",
        optionB: "14 days",
        optionC: "5 days",
        optionD: "7 days",
        correctOption: "optionD"
    },

    {
        question: "How many players are allowed on a soccer field ?",
        optionA: "10 players",
        optionB: "11 players",
        optionC: "9 players",
        optionD: "12 players",
        correctOption: "optionB"
    },

    {
        question: "Who was the first President of USA ?",
        optionA: "Donald Trump",
        optionB: "Barack Obama",
        optionC: "Abraham Lincoln",
        optionD: "George Washington",
        correctOption: "optionD"
    },

    {
        question: "Which month has 30 days ?",
        optionA: "January",
        optionB: "December",
        optionC: "June",
        optionD: "August",
        correctOption: "optionC"
    },

    {
        question: "How manay hours are in one day ?",
        optionA: "30 hours",
        optionB: "38 hours",
        optionC: "48 hours",
        optionD: "24 hours",
        correctOption: "optionD"
    },

    {
        question: "Which is the longest river in the world ?",
        optionA: "River Nile",
        optionB: "Long River",
        optionC: "River Niger",
        optionD: "Lake Chad",
        correctOption: "optionA"
    },

    {
        question: "_____ is the hottest Continent on Earth ?",
        optionA: "Oceania",
        optionB: "Antarctica",
        optionC: "Africa",
        optionD: "North America",
        correctOption: "optionC"
    },

    {
        question: "Which country is the largest in the world ?",
        optionA: "Russia",
        optionB: "Canada",
        optionC: "Africa",
        optionD: "Egypt",
        correctOption: "optionA"
    },

    {
        question: "How many stars are on the U.S. flag ?",
        optionA: "None",
        optionB: "Twenty-Five",
        optionC: "Thirteen",
        optionD: "Fifty",
        correctOption: "optionD"
    },

    {
        question: "What is the capital of Pennsylvania ?",
        optionA: "Annville",
        optionB: "Lebanon",
        optionC: "Reading",
        optionD: "Harrisburg",
        correctOption: "optionD"
    },

    {
        question: "Where is the world tallest building located ?",
        optionA: "Africa",
        optionB: "California",
        optionC: "Dubai",
        optionD: "Italy",
        correctOption: "optionC"
    },

    {
        question: "The longest river in the United States is ?",
        optionA: "Missouri River",
        optionB: "Delaware River",
        optionC: "Colorado River",
        optionD: "Rio Grande",
        correctOption: "optionA"
    },


    {
        question: "How many permanent teeth does a dog have ?",
        optionA: "38",
        optionB: "42",
        optionC: "40",
        optionD: "36",
        correctOption: "optionB"
    },

    {
        question: "Which team won the superbowl last year ?",
        optionA: "Atlanta",
        optionB: "Dallas Cowboys",
        optionC: "Green Bay Packers",
        optionD: "Los Angeles Rams",
        correctOption: "optionD"
    },

    {
        question: "Which US state was Donald Trump Born ?",
        optionA: "New York",
        optionB: "California",
        optionC: "New Jersey",
        optionD: "Los Angeles",
        correctOption: "optionA"
    },

    {
        question: "How man states does the United States have ?",
        optionA: "24",
        optionB: "30",
        optionC: "36",
        optionD: "37",
        correctOption: "optionC"
    },

    {
        question: "____ is the capital of the United States ?",
        optionA: "Washington D.C.",
        optionB: "New York City",
        optionC: "Detroit",
        optionD: "Los Angeles",
        correctOption: "optionA"
    },

    {
        question: "Los Angeles is also known as ?",
        optionA: "Angels City",
        optionB: "Shining city",
        optionC: "City of Angels",
        optionD: "Lost Angels",
        correctOption: "optionC"
    },

    {
        question: "Who created the first car ?",
        optionA: "Andrew Carnegie",
        optionB: "Warren Buffet",
        optionC: "Elon Musk",
        optionD: "Henry Ford",
        correctOption: "optionD"
    },

    {
        question: "When did the United States land on the moon ?",
        optionA: "1969",
        optionB: "1973",
        optionC: "1955",
        optionD: "2005",
        correctOption: "optionA"
    },

    {
        question: "How many planets are currently in the solar system ?",
        optionA: "Eleven",
        optionB: "Seven",
        optionC: "Nine",
        optionD: "Eight",
        correctOption: "optionD"
    },

    {
        question: "Which Planet is the hottest ?",
        optionA: "Jupitar",
        optionB: "Mercury",
        optionC: "Earth",
        optionD: "Venus",
        correctOption: "optionB"
    },

    {
        question: "Where is the smallest bone in human body located ?",
        optionA: "Toes",
        optionB: "Ears",
        optionC: "Fingers",
        optionD: "Nose",
        correctOption: "optionB"
    },

    {
        question: "What year was the United States founded ?",
        optionA: "1704",
        optionB: "1492",
        optionC: "1776",
        optionD: "1750",
        correctOption: "optionC"
    },

    {
        question: "How many teeth does an adult human have ?",
        optionA: "28",
        optionB: "30",
        optionC: "32",
        optionD: "36",
        correctOption: "optionC"
    }

]

//Andrew Code
//Hunter Code
//Chad Code

let shuffledQuestions = [] 

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 20) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}



let questionNumber = 1 //current question number
let playerScore = 0  //player score
let wrongAttempt = 0 //ount of wrong answers picked by player
let indexNumber = 0 


function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option");
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            
            correctOption = option.labels[0].id
        }
    })

   
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ 
            indexNumber++ 
            setTimeout(() => {
                questionNumber++
            }, 1000)

            if (playerScore <= 9) {
                setTimeout(() => {
                    $("main").toggle();
                    $("#wrapper").toggle();
                    countdown();
                }, 1000)
            }

        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ 
            indexNumber++
            for(var i = 0; i < gameMap.length; i++){
                if(gameMap[i] == 1 && i ){
                    listOfPathIndexes.push(i);
                }    
            }

            if (playerScore <= 9) {
                setTimeout(() => {
                    $("main").toggle();
                    $("#wrapper").toggle();
                    countdown();
                }, 1000)
            }
            
            var g1 =  Math.floor(Math.random() * listOfPathIndexes.length); 
            gameMap[listOfPathIndexes[g1]] = 2;
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
        
    })

   
}




function handleNextQuestion() {
    checkForAnswer() 
    unCheckRadioButtons()
    setTimeout(() => {
        if (playerScore <= 9) {

            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}


function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}


function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}


function handleEndGame() {
    let remark = null
    let remarkColor = null

    
    if (wrongAttempt <= 3) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    else if (wrongAttempt >= 4 && wrongAttempt < 7) {
        remark = "Average, You can do better."
        remarkColor = "orange"
    }
    else if (wrongAttempt <= 7) {
        remark = "Bad, Keep Practicing."
        remarkColor = "red"
    }
    

    
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    
    document.getElementById('score-modal').style.display = "flex"

}


function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
    window.location.reload();
}


function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}