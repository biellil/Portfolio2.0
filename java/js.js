// JavaScript
const menu = document.getElementById("menu");

menu.addEventListener("click", function() {
  if (menu.textContent === "menu") {
    menu.textContent = "menu_open";
  } else {
    menu.textContent = "menu";
  }
});
