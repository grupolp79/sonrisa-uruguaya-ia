// Menú para celulares
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("abierto");
});

// Cerrar el menú al tocar un enlace
menu.querySelectorAll("a").forEach((enlace) => {
  enlace.addEventListener("click", () => menu.classList.remove("abierto"));
});

// Botones que abren la burbuja del chatbot de Chatbase
document.querySelectorAll("[data-abrir-chat]").forEach((boton) => {
  boton.addEventListener("click", () => {
    if (window.chatbase) {
      window.chatbase.open();
    }
  });
});
