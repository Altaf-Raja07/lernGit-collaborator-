// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all feature cards and category cards
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".feature-card, .category-card, .step"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Add hover effect for category cards
document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("click", function () {
    const category = this.querySelector("h3").textContent;
    const quizType = this.getAttribute("data-quiz");

    if (quizType) {
      startQuiz(quizType);
    } else {
      console.log(`${category} quiz coming soon!`);
    }
  });
});

// Quiz Data
const quizData = {
  science: {
    title: "🔬 Science Quiz",
    questions: [
      {
        question: "What is the chemical symbol for gold?",
        options: ["Go", "Au", "Gd", "Ag"],
        correct: 1,
      },
      {
        question: "What is the speed of light in vacuum?",
        options: [
          "300,000 km/s",
          "150,000 km/s",
          "500,000 km/s",
          "200,000 km/s",
        ],
        correct: 0,
      },
      {
        question: "Which organ in the human body produces insulin?",
        options: ["Liver", "Kidney", "Pancreas", "Heart"],
        correct: 2,
      },
      {
        question: "What is the most abundant gas in Earth's atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correct: 1,
      },
      {
        question: "What is the smallest unit of life?",
        options: ["Atom", "Molecule", "Cell", "Tissue"],
        correct: 2,
      },
      {
        question: "What is the process by which plants make their food?",
        options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
        correct: 1,
      },
      {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        correct: 2,
      },
      {
        question: "How many bones are in the adult human body?",
        options: ["186", "206", "226", "246"],
        correct: 1,
      },
      {
        question: "What is the center of an atom called?",
        options: ["Electron", "Proton", "Neutron", "Nucleus"],
        correct: 3,
      },
      {
        question: "What type of blood cells fight infection?",
        options: [
          "Red blood cells",
          "White blood cells",
          "Platelets",
          "Plasma cells",
        ],
        correct: 1,
      },
    ],
  },
  geography: {
    title: "🌍 Geography Quiz",
    questions: [
      {
        question: "What is the capital of Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correct: 2,
      },
      {
        question: "Which is the longest river in the world?",
        options: [
          "Amazon River",
          "Nile River",
          "Yangtze River",
          "Mississippi River",
        ],
        correct: 1,
      },
      {
        question: "What is the largest desert in the world?",
        options: [
          "Sahara Desert",
          "Arabian Desert",
          "Antarctic Desert",
          "Gobi Desert",
        ],
        correct: 2,
      },
      {
        question: "Which country has the most natural lakes?",
        options: ["United States", "Canada", "Russia", "Brazil"],
        correct: 1,
      },
      {
        question: "What is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        correct: 1,
      },
      {
        question: "Which ocean is the deepest?",
        options: [
          "Atlantic Ocean",
          "Indian Ocean",
          "Pacific Ocean",
          "Arctic Ocean",
        ],
        correct: 2,
      },
      {
        question: "What is the tallest mountain in the world?",
        options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Denali"],
        correct: 2,
      },
      {
        question: "How many continents are there on Earth?",
        options: ["5", "6", "7", "8"],
        correct: 2,
      },
      {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "South Korea"],
        correct: 1,
      },
      {
        question: "What is the largest island in the world?",
        options: ["Madagascar", "Greenland", "New Guinea", "Borneo"],
        correct: 1,
      },
    ],
  },
  sports: {
    title: "⚽ Sports Quiz",
    questions: [
      {
        question: "How many players are on a basketball team on the court?",
        options: ["4", "5", "6", "7"],
        correct: 1,
      },
      {
        question: "Which country won the FIFA World Cup in 2018?",
        options: ["Brazil", "Germany", "France", "Argentina"],
        correct: 2,
      },
      {
        question: "What is the maximum score in a single frame of bowling?",
        options: ["100", "200", "300", "400"],
        correct: 2,
      },
      {
        question: "How many Grand Slam tournaments are there in tennis?",
        options: ["2", "3", "4", "5"],
        correct: 2,
      },
      {
        question: "What is the diameter of a basketball hoop in inches?",
        options: ["16", "18", "20", "22"],
        correct: 1,
      },
      {
        question: "Which sport is known as 'The Beautiful Game'?",
        options: ["Basketball", "Soccer", "Tennis", "Cricket"],
        correct: 1,
      },
      {
        question: "How many minutes is a typical NFL football quarter?",
        options: ["10", "12", "15", "20"],
        correct: 2,
      },
      {
        question: "What is the national sport of Japan?",
        options: ["Karate", "Judo", "Sumo Wrestling", "Kendo"],
        correct: 2,
      },
      {
        question: "How many holes are played in a standard round of golf?",
        options: ["9", "12", "18", "24"],
        correct: 2,
      },
      {
        question: "Which athlete has won the most Olympic gold medals?",
        options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Mark Spitz"],
        correct: 1,
      },
    ],
  },
  technology: {
    title: "💻 Technology Quiz",
    questions: [
      {
        question: "What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Computer Personal Unit",
          "Central Program Utility",
          "Computer Processing Utility",
        ],
        correct: 0,
      },
      {
        question: "Who is known as the father of computers?",
        options: [
          "Steve Jobs",
          "Bill Gates",
          "Charles Babbage",
          "Alan Turing",
        ],
        correct: 2,
      },
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
        ],
        correct: 0,
      },
      {
        question: "Which company developed the Java programming language?",
        options: ["Microsoft", "Sun Microsystems", "Oracle", "IBM"],
        correct: 1,
      },
      {
        question: "What year was the first iPhone released?",
        options: ["2005", "2006", "2007", "2008"],
        correct: 2,
      },
      {
        question: "What does USB stand for?",
        options: [
          "Universal Serial Bus",
          "Universal System Bridge",
          "Uniform Serial Bus",
          "United System Bus",
        ],
        correct: 0,
      },
      {
        question: "Which programming language is known as the language of the web?",
        options: ["Python", "JavaScript", "C++", "Ruby"],
        correct: 1,
      },
      {
        question: "What is the most popular operating system for smartphones?",
        options: ["iOS", "Android", "Windows", "Blackberry"],
        correct: 1,
      },
      {
        question: "How many bits are in a byte?",
        options: ["4", "8", "16", "32"],
        correct: 1,
      },
      {
        question: "What does AI stand for?",
        options: [
          "Automated Intelligence",
          "Artificial Intelligence",
          "Advanced Integration",
          "Automatic Interface",
        ],
        correct: 1,
      },
    ],
  },
};

// Quiz State
let currentQuiz = null;
let currentQuestion = 0;
let score = 0;
let userAnswers = [];

// Start Quiz
function startQuiz(quizType) {
  currentQuiz = quizData[quizType];
  currentQuestion = 0;
  score = 0;
  userAnswers = [];

  // Show quiz container
  document.getElementById("quiz-container").style.display = "block";
  document.getElementById("quiz-result").style.display = "none";
  document.getElementById("quiz-content").style.display = "block";
  document.getElementById("quiz-title").textContent = currentQuiz.title;

  // Scroll to quiz
  document
    .getElementById("quiz-container")
    .scrollIntoView({ behavior: "smooth" });

  // Load first question
  loadQuestion();
}

// Load Question
function loadQuestion() {
  const question = currentQuiz.questions[currentQuestion];

  // Update progress
  const progress = ((currentQuestion + 1) / currentQuiz.questions.length) * 100;
  document.getElementById("progress-bar").style.width = progress + "%";
  document.getElementById("question-counter").textContent = `Question ${
    currentQuestion + 1
  } of ${currentQuiz.questions.length}`;

  // Display question
  document.getElementById("question-text").textContent = question.question;

  // Display options
  const optionsContainer = document.getElementById("options-container");
  optionsContainer.innerHTML = "";

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.textContent = option;
    button.addEventListener("click", () => selectAnswer(index));
    optionsContainer.appendChild(button);
  });
}

// Select Answer
function selectAnswer(selectedIndex) {
  const question = currentQuiz.questions[currentQuestion];
  const isCorrect = selectedIndex === question.correct;

  if (isCorrect) {
    score++;
  }

  userAnswers.push(selectedIndex);

  // Highlight the selected answer
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((btn, index) => {
    btn.disabled = true;
    if (index === question.correct) {
      btn.classList.add("correct");
    } else if (index === selectedIndex && !isCorrect) {
      btn.classList.add("incorrect");
    }
  });

  // Move to next question after a delay
  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < currentQuiz.questions.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }, 1500);
}

// Show Results
function showResults() {
  document.getElementById("quiz-content").style.display = "none";
  document.getElementById("quiz-result").style.display = "block";

  const percentage = (score / currentQuiz.questions.length) * 100;
  let message = "";

  if (percentage >= 80) {
    message = "Excellent work! 🌟";
  } else if (percentage >= 60) {
    message = "Great job! 👍";
  } else if (percentage >= 40) {
    message = "Good effort! 📚";
  } else {
    message = "Keep practicing! 💪";
  }

  document.getElementById("score-text").innerHTML = `
        <h3>${message}</h3>
        <p class="score-number">You scored <strong>${score}</strong> out of <strong>${
    currentQuiz.questions.length
  }</strong></p>
        <p class="percentage">${percentage.toFixed(0)}%</p>
    `;
}

// Event Listeners
document.getElementById("close-quiz").addEventListener("click", () => {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("categories").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("restart-quiz").addEventListener("click", () => {
  currentQuestion = 0;
  score = 0;
  userAnswers = [];
  document.getElementById("quiz-result").style.display = "none";
  document.getElementById("quiz-content").style.display = "block";
  loadQuestion();
});

document.getElementById("back-categories").addEventListener("click", () => {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("categories").scrollIntoView({ behavior: "smooth" });
});

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.15)";
  } else {
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }
});

// Animated counter for stats
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = target.toLocaleString() + "+";
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toLocaleString() + "+";
    }
  }, 16);
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.classList.contains("counted")) {
        entry.target.classList.add("counted");
        const statNumbers = entry.target.querySelectorAll(".stat-item h3");

        statNumbers.forEach((stat) => {
          const targetValue = parseInt(stat.textContent.replace(/,|\+/g, ""));
          stat.textContent = "0+";
          animateCounter(stat, targetValue);
        });
      }
    });
  },
  { threshold: 0.5 }
);

const statsSection = document.querySelector(".stats");
if (statsSection) {
  statsObserver.observe(statsSection);
}
