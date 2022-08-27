
const a = document.querySelector("#ladoA");
const b = document.querySelector("#ladoB");
const c = document.querySelector("#ladoC");
const resultado = document.querySelector("#resultado");
const btn = document.querySelector("#calcular");

function definirTriangulo() {
  console.log('a',a.value)
  console.log('b',b.value)
  console.log('c',c.value)
  resultado.value = triangulo(parseInt(a.value), parseInt(b.value), parseInt(c.value));
}

/*btn.addEventListener("click",function () {
  
})*/


function triangulo(a, b, c) {
  if (a < (b + c) && b < (a + c) && c < (a + b)) {
    if (a == b && b == c) {
      console.log('Equilatéro')
      return 'Equilatéro'
    }
    else if (a == b || a == c || b == c) {
      console.log('Isosceles')
      return 'Isosceles'
    }
    else if (a != b && b != c && c != a) {
      return 'Escaleno'
    }
    else {
      console.log("Nenhum valor foi informado");
      return 'valores informados invalidos'
    }
  }else
  {
    return 'triangulo invalido(condição de triângulo)'
  }
}

