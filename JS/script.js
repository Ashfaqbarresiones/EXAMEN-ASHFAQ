const formulariReserva = document.getElementById("formulariReserva");

formulariReserva.onsubmit = (e) => {
  e.preventDefault();
  formulariReserva.classList.add("was-validated");

  if (formulariReserva.checkValidity()) {
    alert("Formulari enviat correctament. Gràcies per contactar amb Sakura.");
    formulariReserva.reset();
    formulariReserva.classList.remove("was-validated");
  }
};
