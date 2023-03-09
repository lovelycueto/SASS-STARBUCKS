// const toggleMenu = document.querySelector(".toggle__menu");
// const header__nav = document.querySelector(".header__nav");
// toggleMenu.addEventListener("click", () => {
//   toggleMenu.classList.toggle("open");
//   header__nav.classList.toggle("open");
// })

const kamote = document.querySelectorAll(".links__item h4");
kamote.forEach((kamoteq) => {
  kamoteq.addEventListener("click", () => {
    kamoteq.nextElementSibling.classList.toggle("open");
    kamoteq.querySelector("i").classList.toggle("open");

  })
})
  
// });