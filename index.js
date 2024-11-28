
var quizArray = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "None of the above"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Which of the following is used for styling web pages?",
        options: ["HTML", "CSS", "JavaScript", "PHP"],
        correctAnswer: "CSS"
    },
    {
        question: "Which of the following is a JavaScript data type?",
        options: ["String", "Integer", "Character", "Float"],
        correctAnswer: "String"
    },
    {
        question: "Which of the following is used for styling web pages?",
        options: ["HTML", "CSS", "JavaScript", "PHP"],
        correctAnswer: "CSS"
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "Which property is used to change the background color in CSS?",
        options: ["color", "background-color", "bg-color", "color-background"],
        correctAnswer: "background-color"
    }

  ];

  var quizSection = document.getElementById("quiz-section");
  

  function loadQuiz() {
  
    for (var i = 0; i < quizArray.length; i++) {
      
      var card = document.createElement("div");
      card.setAttribute("class", "col-md-4 mb-3");
      
      var cardContent = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${quizArray[i].question}</h5>
            <ul class="list-group">
              ${quizArray[i].options.map(function(option) {
                return `<li class="list-group-item">
                          <input type="radio" name="question${i}" value="${option}" class="option">
                          ${option}
                        </li>`;
              }).join('')}
            </ul>
          </div>
        </div>`;
        
      card.innerHTML = cardContent;
      
      quizSection.appendChild(card);
    }
  }
  function checkAnswers() {
    var totalCorrect = 0;
    for (var i = 0; i < quizArray.length; i++) {
      var selectedOption = document.querySelector(`input[name="question${i}"]:checked`);
      
      if (selectedOption && selectedOption.value === quizArray[i].correctAnswer) {
        totalCorrect++;
      }
    }
    
    alert(`You answered ${totalCorrect} out of ${quizArray.length} questions correctly!`);
  }
  

  document.getElementById("submit").addEventListener("click", checkAnswers);
  

  loadQuiz();
  
