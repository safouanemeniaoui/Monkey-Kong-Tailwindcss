let dropIcon = document.querySelector(".drop-icon");
let menu = document.querySelector(".header nav ul");
let turnQuestion = document.querySelectorAll(".question-box div span");
let questionBoxes = document.querySelectorAll(".question-box");

dropIcon.addEventListener("click", () => {
  menu.classList.toggle("drop-down");
});

turnQuestion.forEach((e) => {
  e.addEventListener("click", () => {
    e.parentElement.parentElement.classList.add("turn");
  });
});

document.onclick = function (el) {
  questionBoxes.forEach((e) => {
    e.onclick = function (e) {
      e.stopPropagation();
    };
    turnQuestion.forEach((q) => {
      if (el.target !== e && el.target !== q) {
        if (e.classList.contains("turn")) {
          e.classList.remove("turn");
          console.log("yes");
        }
      }
    });
  });
};
