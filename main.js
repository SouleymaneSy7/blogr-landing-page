import "./sass/main.scss";

// DropDown
const dropDownBtn = document.querySelectorAll("a.link");

dropDownBtn.forEach((dropDown) => {
  dropDown.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    e.target.nextElementSibling.classList.toggle("active");
  });
});

// Hamburger Menu

const showMenu = (hamburgerMenu, navItems) => {
  const hamburger = document.querySelector(hamburgerMenu);
  const nav = document.querySelector(navItems);

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      nav.classList.toggle("active");
      hamburger.classList.toggle("active");
    });
  }
};

showMenu(".header--hamburger-menu", ".navigation");
