
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

//  If start Quiz button Clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeinfo"); //show info in box
}

//  If Exit button Clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeinfo"); // hide the info box

}

//  If Continue button Clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeinfo"); // hide the info box
    quiz_box.classList.add("activeQuiz"); // show quiz box
    showQuestions(3);
    queCounter(1);
}


 let que_count = 0;
 let que_num = 1;

 const next_btn = quiz_box.querySelector(".next_btn")

 //if Next button Click
 next_btn.onclick = ()=>{
   if (que_count < questions.length -1){
     que_count++;
     que_num++;
     showQuestions(que_count);
     queCounter(que_num);
   }  else{
     console.log("Questions completed")
   }

 }

 //getting questions and s from array
 function showQuestions(index){
   const que_text = document.querySelector(".que_text");
   const option_list = document.querySelector(".option_list");
   let que_tag = '<span>'+ questions[index].num1 + "." + questions[index].question1 +'</span>';
   let option_tag = '<div class="option">' +  questions[index].options[0] +'<span></span></div>'
                    + '<div class="option">' + questions[index].options[1] +'<span></span></div>'
                    + '<div class="option">' + questions[index].options[2] +'<span></span></div>'
                    + '<div class="option">' + questions[index].options[3] +'<span></span></div>';          
  
      que_text.innerHTML = que_tag;
      option_list.innerHTML = option_tag;
      const option = option_list.querySelectorAll(".option");
      for(let i= 0; i < option.length; i++) {
        option[i].setAttribute('onclick', "optionSelected(this)")
      }
 }

 function queCounter(index){
const bottom_ques_counter = quiz_box.querySelector(".total_que")
let totalQuesCountTag = '<span><p>'+ que_count +'</p>/<p>'+ questions.length +'</p>Questions</span>'
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
        answer: "Add element to the beginning of an array ",
        options: [
          "Add element to the end of an array",
          "Add elemetnthe the middle of an array",
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
          ">",
        ]
    },
    {
        num1: 4,
        question1: "What is CSS used for ?",
        answer: "style and layout",
        options: [
          "Markup",
          "functionality",
          "store data",
          "All are correct",
        ]
    },
]


