const a = document.querySelector("#nota");
const b = document.querySelector("#resultado");
const btn = document.querySelector("calcular")

function definirNota() {
  console.log(a)
  resultado.value = notas(a.value);
}
function notas(a) {

  if (a < 38) {
    return `Reprovado,sua nota foi ${a} `
  }
  else if (a >= 38 && a <= 100) {
    if ((Math.ceil(a / 5) * 5) - a < 3) {
      a = Math.ceil(a / 5) * 5
    }
    return `Aprovado,sua nota foi ${a}`
  }
  else if (a >= 100) {
    return "Valor inválido"
  }
}