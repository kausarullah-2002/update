var currentQuestion = 0;
var score = 0;

var questions = [
  {
    question: " 1. The market will open ........... 8 oclock during winter season.",
    options: [" on ", " in ", " to ", " at "],
    answer: 0
  },
  {
    question: "2. Sign your name .......... the dotted line at the end of the admission form.",
    options: [" in", " on ", " onto", " into"],
    answer: 0
  },
  {
    question: "3. Maria is affaid ...... crocodiles.",
    options: [" in", " of", " to", " on"],
    answer: 3
  },
  {
    question: "4. I always prefer to read ............... the school library.",
    options: ["into", " in", " on", " to"],
    answer: 0
  },
  {
    question: "5. I will stay ..... my grandfather's house.",
    options: [" on", " over", " at", " in"],
    answer: 0
  },
  {
    question: "6. They when will stop ...... the school gate.",
    options: [" on", " at ", " in", " over"],
    answer: 3
  },
  {
    question: "7. He dived ........... in water.",
    options: [" on", "into", " at ", " in"],
    answer: 0
  },
  {
    question: "8. Open your chemistry book ................ page 112.",
    options: [" in", " on", " over", " at"],
    answer: 0
  },
  {
    question: "9. He can swim ............... the pool.",
    options: [" to", " on", " in", "into"],
    answer: 3
  },
  {
    question: "10. The baby was hiding ............. the table.",
    options: [ " over", " into", " on", " under"],
    answer: 0
  },
  {
    question: "11. The boys are standing ...... the entrance of the school gate.",
    options: [" at", " on", " into", " in"],
    answer: 0
  },
  {
    question: "12. Aslam usually goes to bed late ............ night. ",
    options: [" to", " at", " in", " over"],
    answer: 3
  },
  {
    question: "13. He is worried ........ the job test.",
    options: [ " of", " about", " on", " in"],
    answer: 0
  },
  {
    question: "14. The flight to Islamabad leaves ....... 4pm.",
    options: [" on", " over", " in", " at "],
    answer: 0
  },
  {
    question: "15. Zuhaib will meet you ....... he bus stop.",
    options: ["in", "to", "at", "on"],
    answer: 3
  }
];

var questionElement = document.getElementById('question');
var optionsElement = document.getElementById('options');
var submitButton = document.getElementById('submitBtn');
var resultElement = document.getElementById('result');

function loadQuestion() {
  var question = questions[currentQuestion];
  questionElement.textContent = question.question;
  
  optionsElement.innerHTML = "";
  for (var i = 0; i < question.options.length; i++) {
    var option = document.createElement('input');
    option.type = "radio";
    option.name = "answer";
    option.value = i;
    
    var label = document.createElement('label');
    label.textContent = question.options[i];
    
    var optionContainer = document.createElement('div');
    optionContainer.appendChild(option);
    optionContainer.appendChild(label);
    
    optionsElement.appendChild(optionContainer);
  }
}

function submitAnswer() {
  var selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    return;
  }
  
  var answer = parseInt(selectedOption.value);
  if (answer === questions[currentQuestion].answer) {
    score++;
  }
  
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

// function showResult() {
//   questionElement.style.display = "none";
//   optionsElement.style.display = "none";
//   submitButton.style.display = "none";
  
//   resultElement.textContent = "Your score: " + score + "/" + questions.length;
// }

loadQuestion();
submitButton.addEventListener('click', submitAnswer);




var minutes = 60;
var seconds = 0;

function updateTime() {
  var timeElement = document.getElementById('time');
  
  if (minutes === 0 && seconds === 0) {
    timeElement.textContent = "Time's up!";
    return;
  }
  
  if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }
  
  var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  
  timeElement.textContent = formattedMinutes + ":" + formattedSeconds;
}

setInterval(updateTime, 1000); // Update every second

