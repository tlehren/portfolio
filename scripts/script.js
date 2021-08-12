//dark mode
// const button = document.querySelector(".footer i");
// const body = document.querySelector("body");

// button.addEventListener("click", () => {
//   body.classList.toggle("dark-bg");
//   if (body.classList.contains("dark-bg")) {
//     button.className = "fas fa-sun fa-2x";
//   } else {
//     button.className = "fas fa-moon fa-2x";
//   }
// });

//hamburger toggle open
const navToggle = document.querySelectorAll(".navToggle");

navToggle.forEach((navToggle) => {
  navToggle.addEventListener("click", () => {
    document.body.classList.toggle("navOpen");
    document.body.classList.toggle("overflow");
  });
});

//hamburger toggle close on menu click

const navItem = document.querySelectorAll(".navItem");

navItem.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    document.body.classList.toggle("navOpen");
    document.body.classList.toggle("overflow");
  });
});
