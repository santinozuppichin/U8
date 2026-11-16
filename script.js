var edad = Number(prompt("Ingresá tu edad:"));
var sexo = prompt("¿Sos hombre o mujer?").toLowerCase();

if ((sexo === "mujer" && edad >= 60) || (sexo === "hombre" && edad >= 65)) {
  alert("Estás en edad de jubilarte.");
} else {
  alert("Todavía no estás en edad de jubilarte.");
}