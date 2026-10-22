const botonesModelo = document.querySelectorAll(".modelo-card");

botonesModelo.forEach((boton) => {
  boton.addEventListener("click", (evento) => {
    evento.preventDefault();

    const modelo = boton.textContent.trim();

    document.querySelectorAll(".modelo-card").forEach((b) => {
      b.classList.remove("activo");
    });

    boton.classList.add("activo");

    document.querySelector("#casos-modelo")?.remove();

    const galeria = document.createElement("section");
    galeria.id = "casos-modelo";
    galeria.innerHTML = `
      <h2>Cases para ${modelo}</h2>
      <p>Próximamente encontrarás aquí todos los diseños disponibles.</p>
    `;

    document.querySelector("#modelos").after(galeria);
    galeria.scrollIntoView({ behavior: "smooth" });
  });
});
