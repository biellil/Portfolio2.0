
const menu = document.getElementById("menu");

menu.addEventListener("click", function() {
  if (menu.textContent === "menu") {
    menu.textContent = "close";
  } else {
    menu.textContent = "menu";
  }
  
});


