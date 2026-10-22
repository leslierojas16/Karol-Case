document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("button.modelo-card").forEach((boton) => {
    boton.addEventListener("click", () => {
      boton.classList.add("activo");
    });
  });
});
