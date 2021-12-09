var open = false;

function navBar() {
  if (!open) {
    document.getElementsByClassName("menu")[0].classList.add("open");
    open = true;
  } else {
    document.getElementsByClassName("menu")[0].classList.remove("open");
    open = false;
  }
}

var contentIndex = [
  "Este soy yo",
  "Hola, me llamo Aaron",
  "De aquí soy yo",
  "Soy de Canarias",
  "Puedes contactar en",
  "uo290526@alumnos.uc3m.es",
];

var contentAficiones = [
  "Me gusta viajar",
  "Y recorrer el mundo",
  "Me gustan las series",
  "Como How to get away with murder",
];

var contentExperiencia = [
  "Global Incubator (ago2020-sep2021)",
  "Full-Stack Developer",
  "Atlafy (sep2021-actualidad)",
  "Software Developer",
];

var contentEducación = [
  "Ingeniería Informática",
  "En la Universidad Carlos III de Madrid",
  "Ingeniería Web",
  "En la Universidad de Oviedo",
];

function goToSearch() {
    window.location.href = "search.html";
    console.log("a")
}

$(document).ready(function () {
  $("#searcher").keyup(function (e) {
    var valor = $(this).val();
    var valor = valor.toLowerCase();
    $("#results").empty();
    contentIndex.forEach(function (el) {
      if (el.toLowerCase().includes(valor) & (valor.length > 1)) {
        $("#results").append(
          `<div class="find">${el} <a href="index.html"><img class="icon" src="./assets/icons/link.svg" alt="link icon" style="margin-left: 1rem;"></a></div>`
        );
      }
    });
    contentAficiones.forEach(function (el) {
      if (el.toLowerCase().includes(valor) & (valor.length > 1)) {
        $("#results").append(
          `<div class="find">${el} <a href="aficiones.html"><img class="icon" src="./assets/icons/link.svg" alt="link icon" style="margin-left: 1rem;"></a></div>`
        );
      }
    });
    contentEducación.forEach(function (el) {
      if (el.toLowerCase().includes(valor) & (valor.length > 1)) {
        $("#results").append(
          `<div class="find">${el} <a href="educacion.html"><img class="icon" src="./assets/icons/link.svg" alt="link icon" style="margin-left: 1rem;"></a></div>`
        );
      }
    });
    contentExperiencia.forEach(function (el) {
      if (el.toLowerCase().includes(valor) & (valor.length > 1)) {
        $("#results").append(
          `<div class="find">${el} <a href="experiencia.html"><img class="icon" src="./assets/icons/link.svg" alt="link icon" style="margin-left: 1rem;"></a></div>`
        );
      }
    });
  });
});
