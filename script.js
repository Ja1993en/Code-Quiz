
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const timeCount = quiz_box.querySelector(".timer .timer_sec");


const option_list = document.querySelector(".option_list");



//  If start Quiz button Clicked
start_btn.onclick = () => {
  info_box.classList.add("activeinfo"); //show info in box
}

//  If Exit button Clicked
exit_btn.onclick = () => {
  info_box.classList.remove("activeinfo"); // hide the info box

}

//  If Continue button Clicked
continue_btn.onclick = () => {
  info_box.classList.remove("activeinfo"); // hide the info box
  quiz_box.classList.add("activeQuiz"); // show quiz box
  showQuestions(3);
  queCounter(1);
  startTimer(10);
 
}


let que_count = 0;
let que_num = 1;
let counter;
let timeValue = 10;



const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

//if Next button Click
next_btn.onclick = () => {
  if (que_count < questions.length - 1) {
    que_count++;
    que_num++;
    showQuestions(que_count);
    queCounter(que_num);
    clearInterval(counter);
    startTimer(timeValue);
  } else {
    console.log("Questions completed");
    showResultBox();
  }

}

//getting questions and s from array
function showQuestions(index) {
  const que_text = document.querySelector(".que_text");
  let que_tag = '<span>' + questions[index].num1 + "." + questions[index].question1 + '</span>';
  let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
    + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
    + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
    + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;

  const option = option_list.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute('onclick', "optionSelected(this)")
  }
}



function optionSelected(answer) {
  clearInterval(counter);
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  let allOptions = option_list.children.length;
  if (userAns == correctAns) {
    answer.classList.add("correct");
    console.log("Answer is correct");

  } else {
    answer.classList.add("incorrect");
    console.log("Answer is wrong");
   
    //  if answers is Incorrect then automatcall 
    for (let i = 0; i < allOptions; i++) {
      if(option_list.children[i].textContent == correctAns){
        option_list.children[i].setAttribute("class", "option correct")
      }
    }

 }

  for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
  }
  next_btn.style.display = "block";
}

function showResultBox(){
  info_box.classList.remove("activeinfo"); // hide the info box
  quiz_box.classList.remove("activeQuiz"); // hide the quiz box
  result_box.classList.add("activeResult"); // show Resultbox 

}


function startTimer(time){
  counter = setInterval(timer, 1000);
  function timer(){
    timeCount.textContent = time;
    time--;
    if(time < 0){
      let addZero = timeCount.textContent;
      timeCount.textContent + "0" + addZero

    }
    if(time < 0){
      clearInterval(counter)
      timeCount.texcontent= "00"
    }
  }
}




//once user 



function queCounter(index) {
  const bottom_ques_counter = quiz_box.querySelector(".total_que")
  let totalQuesCountTag = '<span><p>' + que_count + '</p>/<p>' + questions.length + '</p>Questions</span>'
  bottom_ques_counter.innerHTML = totalQuesCountTag;
}





let questions = [
  {
    num1: 1,
    question1: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Meta Language",
      "Hyper Tool Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Text Markup Language",
    ]
  },
  {
    num1: 2,
    question1: "What does .unshift do?",
    answer: "Add element to the beginning of an array",
    options: [
      "Add element to the end of an array",
      "Add element to the beginning of an array",
      "add indentation to the beginning of an array",
      "Deletes an array",
    ]
  },
  {
    num1: 3,
    question1: "operators used for adding ?",
    answer: "++",
    options: [
      "--",
      "<=",
      "=",
      "++",
    ]
  },
  {
    num1: 4,
    question1: "What is CSS used for ?",
    answer: "style and layout",
    options: [
      "style and layout",
      "functionality",
      "store data",
      "All are correct",
    ]
  },
]


