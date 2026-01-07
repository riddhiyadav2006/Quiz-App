
const questions = [
    {
        question: "What is the capital city of India?",
        options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
        answer: "New Delhi"
    },
    {
        question: "Which festival is known as the 'Festival of Lights'?",
        options: ["Holi", "Eid", "Diwali", "Christmas"],
        answer: "Diwali"
    },
    {
        question: "Who is known as the 'God of Cricket' in India?",
        options: ["Virat Kohli", "MS Dhoni", "Kapil Dev", "Sachin Tendulkar"],
        answer: "Sachin Tendulkar"
    },
    {
        question: "What is the national animal of India?",
        options: ["Lion", "Elephant", "Tiger", "Peacock"],
        answer: "Tiger"
    },
    {
        question: "Which city is known as the 'Pink City'?",
        options: ["Jaipur", "Udaipur", "Bangalore", "Hyderabad"],
        answer: "Jaipur"
    }
];


let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

//  Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");

//  Event Listeners
document.getElementById("start-btn").addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => {
  
    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
    }
    
    // Move to next 
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});
document.getElementById("restart-btn").addEventListener("click", () => {
    location.reload(); 
});



function startQuiz() {
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
   
    selectedOption = null;
    nextBtn.classList.add("hidden");
    optionsContainer.innerHTML = "";
    
    // Get current question data
    const currentData = questions[currentQuestionIndex];
    questionText.innerText = currentData.question;

    // Create buttons for each option
    currentData.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("option-btn");
        
        // Add click event to select answer
        button.addEventListener("click", () => selectAnswer(option, button));
        
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(option, button) {
    // Save selected answer
    selectedOption = option;
    
    // Remove 'selected' class from all buttons
    const allButtons = document.querySelectorAll(".option-btn");
    allButtons.forEach(btn => btn.classList.remove("selected"));
    
    // Add 'selected' class to the clicked button
    button.classList.add("selected");
    
    // Show Next button
    nextBtn.classList.remove("hidden");
}

function showResult() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    scoreDisplay.innerText = score;
}