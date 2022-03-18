// ===== SHOW/HIDE MENU =====
const toggle = document.querySelector("header .container .toggle");
const toggleIcons = document.querySelectorAll("header .container .toggle i");
const menu = document.querySelector("header .container ul");

toggle.addEventListener("click", () => {
  toggleIcons.forEach((icon) => icon.classList.toggle("hidden"));
  menu.classList.toggle("active");
});

// ==== SCROLL REVEAL ANIMATION  =====
const sr = ScrollReveal({
  duration: 2000,
  delay: 100,
});
sr.reveal(".home .image");
sr.reveal(".home  .text");
sr.reveal(".work .card");
sr.reveal(".about .image, .skills .text");
sr.reveal(".about .text, .skills .image");
