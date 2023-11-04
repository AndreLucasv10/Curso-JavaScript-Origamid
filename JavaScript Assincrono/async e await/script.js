async function puxarDados(){
  try{
    const responseDados = await fetch('./dados.json')
    const jsonDados = await responseDados.json()
    console.log(jsonDados)
  } catch(erro){
    console.log(erro)
  }
}
puxarDados()