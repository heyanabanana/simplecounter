"use strict";
let count = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("rest")) {
      count--;
    } else if (styles.contains("add")) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
