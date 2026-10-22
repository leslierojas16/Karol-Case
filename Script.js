document.addEventListener("DOMContentLoaded", () => {
  const botonesModelo = document.querySelectorAll(".modelo-card");

  botonesModelo.forEach((boton) => {
    boton.addEventListener("click", (evento) => {
      evento.preventDefault();

      const modelo = boton.textContent.trim();
      let galeria = document.querySelector("#casos-modelo");

      if (!galeria) {
        galeria = document.createElement("section");
        galeria.id = "casos-modelo";
        document.querySelector("#modelos").after(galeria);
      }

      galeria.innerHTML = `
        <h2>Cases para ${modelo}</h2>
        <p>Próximamente encontrarás aquí todos los diseños disponibles.</p>
      `;

      galeria.scrollIntoView({ behavior: "smooth" });
    });
  });
});
