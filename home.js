"use strict";
const toggleButton = document.querySelector(".fa-bars");
const wrapper = document.querySelector(".hidden");
const closeButton = document.querySelector(".menu-toggler");
const navColor = document.getElementById("navbar");

toggleButton.addEventListener("click", () => {
  wrapper.classList.remove("hidden");
});

closeButton.addEventListener("click", () => {
  wrapper.classList.add("hidden");
});

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    navbar.classList.add("transparent");
  } else {
    navbar.classList.remove("transparent");
  }
});
