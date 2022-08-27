let valorA = prompt("Informe o valor de A:");
let valorB = prompt("Informe o valor de B:");
let valorC = prompt("Informe o valor de C:");
let coeficiente1;
let coeficiente2;

let delta = (valorB * valorB) - 4 * valorA * valorC;

document.write("Valor de Delta => " + delta + "<br/><br/>");

if (delta < 0) {
  document.write("Não existem raizes reais para delta negativo. <br/>");
} else {

  document.write("Para Delta positivo, raízes diferentes: <br/>");

  coeficiente1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
  coeficiente2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);

  document.write("x' = " + coeficiente1 + "<br/>");
  document.write("x'' = " + coeficiente2 + "<br/>");
}