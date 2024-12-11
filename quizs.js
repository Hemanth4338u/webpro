let questions = [
    {
        prompt: "What is your age?",
        options: ["Under 18", "18-65", "Over 65"],
        answer: "18-65",
        eligibility: true
    },
    {
        prompt: "Are you in good general health?",
        options: ["Yes", "No"],
        answer: "Yes",
        eligibility: true
    },
    {
        prompt: "Do you have any chronic illnesses (e.g., diabetes, hypertension)?",
        options: ["Yes", "No"],
        answer: "No",
        eligibility: false
    },
    {
        prompt: "Have you ever had any major surgeries?",
        options: ["Yes", "No"],
        answer: "No",
        eligibility: false
    },
    {
        prompt: "Do you smoke or use tobacco products?",
        options: ["Yes", "No"],
        answer: "No",
        eligibility: false
    },
    {
        prompt: "Do you consume alcohol regularly?",
        options: ["Yes", "No"],
        answer: "No",
        eligibility: false
    },
    {
        prompt: "Are you currently taking any medications?",
        options: ["Yes", "No"],
        answer: "No",
        eligibility: false
    },
    {
        prompt: "Have you ever been diagnosed with any infectious diseases (e.g., HIV, Hepatitis)?",
        options: ["Yes", "No"],
        answer: "No",
        eligibility: false
    },
    {
        prompt: "What is your blood type?",
        options: ["A", "B", "AB", "O", "Don’t know"],
        answer: "Don’t know", // You can adjust the answer based on your criteria
        eligibility: false // Adjust based on your criteria
    },
    {
        prompt: "Have you experienced any significant changes in your health in the past year?",
        options: ["Yes", "No"],
        answer: "No",
        eligibility: false
    },
    {
        prompt: "Does your family have a history of any hereditary diseases?",
        options: ["Yes", "No"],
        answer: "No",
        eligibility: false
    },
    {
        prompt: "Have you traveled to any countries with a high risk of infectious diseases in the past year?",
        options: ["Yes", "No"],
        answer: "No",
        eligibility: false
    },
    {
        prompt: "Are you interested in donating a specific organ (e.g., kidney, liver)?",
        options: ["Yes", "No"],
        answer: "No",
        eligibility: false
    },
    {
        prompt: "If yes, which organ(s) are you interested in donating?",
        options: ["Kidney", "Liver", "Heart", "Lungs", "Other"],
        answer: "Other", // Adjust based on your criteria
        eligibility: false // Adjust based on your criteria
    },
    {
        prompt: "Have you ever donated blood or any other organ/tissue before?",
        options: ["Yes", "No"],
        answer: "No",
        eligibility: false
    },
    {
        prompt: "Are you aware of the legal and medical implications of organ donation?",
        options: ["Yes", "No"],
        answer: "Yes",
        eligibility: true
    }
];

let currentQuestionIndex = 0;
let score = 0;
let eligibility = true;

document.getElementById("start").addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question-words").innerHTML = `<div class="question-box">${currentQuestion.prompt}</div>`;
    let optionsHtml = "";
    for (let i = 0; i < currentQuestion.options.length; i++) {
        optionsHtml += `<button class="option" onclick="checkAnswer('${currentQuestion.options[i]}')">${currentQuestion.options[i]}</button>`;
    }
    document.getElementById("options").innerHTML = optionsHtml;
}

function checkAnswer(answer) {
    let currentQuestion = questions[currentQuestionIndex];
    if (answer === currentQuestion.answer) {
        score++;
        eligibility = currentQuestion.eligibility ? true : eligibility;
    } else {
        eligibility = false;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.getElementById("questions").classList.add("hide");
    document.getElementById("quiz-end").classList.remove("hide");

    // Reset feedback class before adding new one
    const feedback = document.getElementById("feedback");
    feedback.classList.remove("green", "red"); // Remove existing classes

    if (eligibility || score === questions.length) {
        document.getElementById("score-final").innerHTML = `Congratulations! You are eligible to donate organs. Your score is ${score} out of ${questions.length}.`;
        feedback.innerHTML = "You are eligible to donate organs.";
        feedback.classList.add("green"); // Add the green class
    } else {
        document.getElementById("score-final").innerHTML = `Sorry, you are not eligible to donate organs. Your score is ${score} out of ${questions.length}.`;
        feedback.innerHTML = "You are not eligible to donate organs.";
        feedback.classList.add("red"); // Add the red class
    }

    feedback.classList.remove("hide"); // Show feedback
}

document.getElementById("submit-score").addEventListener("click", showResult);

document.getElementById("restart").addEventListener("click", restartQuiz);

function restartQuiz() {
    document.getElementById("quiz-end").classList.add("hide");
    document.getElementById("start-screen").classList.remove("hide");
    currentQuestionIndex = 0;
    score = 0;
    eligibility = true;
}
