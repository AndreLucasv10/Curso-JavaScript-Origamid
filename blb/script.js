function totalVotos(votos){
   const votosTotais = [4,8,6,2,0]
   votos.forEach(votos => {
      votosTotais[votos]++
   });
   
   let maior = 0
   let indice = 0
   for (let i = 0; i < votosTotais.length; i++) {
      if(votosTotais[i] > maior){
         maior = votosTotais[i]
         indice = i
      }

   }
   return indice
}

console.log(totalVotos([ 1, 1, 3, 0, 1, 4, 0, 0]))