const darkBtn = document.querySelector(".setting-theme");
const colorBtn = document.querySelector(".setting-color");
const blockColor = document.querySelector(".setting-select-colors");
const colors = document.querySelectorAll(".color");
const navItems = document.querySelectorAll(".nav-link");
const setting = document.querySelector(".setting");
const menuMobile = document.querySelector(".menu-mobile");
const sidebar = document.querySelector(".sidebar");
const sidebarCloser = document.querySelector(".sidebar-closer");

menuMobile.addEventListener("click", function () {
  sidebar.classList.add("is-showed");
});
sidebarCloser.addEventListener("click", function () {
  sidebar.classList.remove("is-showed");
});

darkBtn.addEventListener("click", function () {
  const icon = darkBtn.querySelector("i");
  if (icon.classList.contains("fa-moon")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
    document.querySelector(".dark").removeAttribute("disabled");
  } else {
    icon.classList.add("fa-moon");
    icon.classList.remove("fa-sun");
    document.querySelector(".dark").setAttribute("disabled", null);
  }
});

colorBtn.addEventListener("click", function (e) {
  blockColor.classList.toggle("is-show");
});

let currentColor = "";
[...colors].forEach((color) => {
  color.addEventListener("click", function (e) {
    if (currentColor === e.target.dataset.color) return;
    const styleColors = document.querySelectorAll(".style-link");
    styleColors.forEach((item) => item.setAttribute("disabled", null));
    currentColor = e.target.dataset.color;
    const a = document.querySelector(`.${e.target.dataset.color}`);
    a.removeAttribute("disabled");
  });
});

window.addEventListener("scroll", function () {
  blockColor.classList.remove("is-show");
});

window.addEventListener("click", function (e) {
  console.log(e.target);
  if (
    !e.target.matches(".setting") &&
    !e.target.matches(".setting-color") &&
    !e.target.matches(".setting-select-colors") &&
    !e.target.matches(".color") &&
    !e.target.matches(".color-title")
  ) {
    blockColor.classList.remove("is-show");
  }
});

navItems.forEach((item) =>
  item.addEventListener("click", function (e) {
    navItems.forEach((i) => i.classList.remove("is-active"));
    e.target.classList.add("is-active");
  })
);
