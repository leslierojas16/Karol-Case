document.addEventListener("DOMContentLoaded", () => {
  const botonesModelo = document.querySelectorAll(".modelo-card");

  botonesModelo.forEach((boton) => {
    boton.addEventListener("click", (evento) => {
      evento.preventDefault();

      document.querySelectorAll(".modelo-card").forEach((b) => {
        b.classList.remove("activo");
      });

      boton.classList.add("activo");

      const galeria = document.querySelector("#casos-modelo");
      if (galeria) {
        galeria.remove();
      }
    });
  });
});
