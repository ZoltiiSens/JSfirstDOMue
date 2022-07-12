"use strict";

function decreaseScore() {
   score--;
   document.querySelector("#score").textContent = score;
}

function setHeigherScore() {
   if (score > high_score) {
      high_score = score;
      document.querySelector("#high_score").textContent = high_score;
   }
}

let num = Math.trunc(Math.random() * 10 + 1);
let score = 10;
let high_score = 0;

console.log(num);

document.querySelector("#send").addEventListener("click", function () {
   let user_number = Number(document.querySelector("#user_num").value);
   if (score === 0) {
      document.querySelector(".num_properties").textContent =
         "you loose! click restart";
   } else if (!user_number || user_number > 10 || user_number < 1)
      document.querySelector("#num_props").textContent = "out of range";
   else if (user_number > num) {
      document.querySelector("#num_props").textContent = "too high";
      decreaseScore();
   } else if (user_number < num) {
      document.querySelector("#num_props").textContent = "too low";
      decreaseScore();
   } else if (user_number === num) {
      document.querySelector("#num_props").textContent = "correct!";
      document.querySelector(".number").textContent = num;
      document.querySelector("body").style.backgroundColor =
         "rgba(95, 199, 11, 1)";
      setHeigherScore();
   }
});
