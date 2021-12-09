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

//Usando jQuery, se busca el input con el id searcher y activa lo de dentro de la función cada vez que se presiona el teclado. 
$(document).ready(function () {
  $("#searcher").keyup(function (e) {
    //Se toma el valor actual del input y se pone en minúsculas para evitar problemas. 
    var valor = $(this).val();
    var valor = valor.toLowerCase();
    //Dentro del HTML que alojará los resultados se elimina el contenido.
    $("#results").empty();
    /*
      Por cada uno de los arrays con el texto que hay en la web se recorre cada uno de los textos
      y se busca coincidencia con el texto incluído. 
      En caso de que exista se introduce dentro del HTML de resultados el contenido. 
    */
    contentIndex.forEach(function (el) {
      if (el.toLowerCase().includes(valor) & (valor.length > 0)) {
        $("#results").append(
          `<div class="find">${el} <a href="index.html"><img class="icon" src="./assets/icons/link.svg" alt="link icon" style="margin-left: 1rem;"></a></div>`
        );
      }
    });
    contentAficiones.forEach(function (el) {
      if (el.toLowerCase().includes(valor) & (valor.length > 0)) {
        $("#results").append(
          `<div class="find">${el} <a href="aficiones.html"><img class="icon" src="./assets/icons/link.svg" alt="link icon" style="margin-left: 1rem;"></a></div>`
        );
      }
    });
    contentEducación.forEach(function (el) {
      if (el.toLowerCase().includes(valor) & (valor.length > 0)) {
        $("#results").append(
          `<div class="find">${el} <a href="educacion.html"><img class="icon" src="./assets/icons/link.svg" alt="link icon" style="margin-left: 1rem;"></a></div>`
        );
      }
    });
    contentExperiencia.forEach(function (el) {
      if (el.toLowerCase().includes(valor) & (valor.length > 0)) {
        $("#results").append(
          `<div class="find">${el} <a href="experiencia.html"><img class="icon" src="./assets/icons/link.svg" alt="link icon" style="margin-left: 1rem;"></a></div>`
        );
      }
    });
  });
});
