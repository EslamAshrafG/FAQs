"use strict";
const openBtn = document.querySelectorAll(".open");
const answers = document.querySelectorAll(".ans");

openBtn.forEach((ele, indx) => {
  ele.addEventListener("click", function (event) {
    answers[indx].classList.toggle("hide");
    ele.classList.toggle("span-rotate");
  });
});
