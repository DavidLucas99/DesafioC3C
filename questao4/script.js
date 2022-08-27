function luidyMoura(numeroLimite){
  let listaNumeroOuNome = []
  for (let i = 1; i<= numeroLimite; i++){
    if(i%5==0 &&  i%9!=0 ){
      listaNumeroOuNome.push("Luidy")
    }else if (i%9==0 &&  i%5!=0 ){
    listaNumeroOuNome.push("Moura")
    }else if (i%9==0 &&  i%5==0 ){
      listaNumeroOuNome.push("LuidyMoura")
    }else{listaNumeroOuNome.push(i)}
  }
  console.log (listaNumeroOuNome)
}
luidyMoura(45)