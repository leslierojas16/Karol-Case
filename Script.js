document.addEventListener("DOMContentLoaded", () => {
  const botonesModelo = document.querySelectorAll(".modelo-card");

  botonesModelo.forEach((boton) => {
    boton.addEventListener("click", (evento) => {
      evento.preventDefault();

    });
  });
});
