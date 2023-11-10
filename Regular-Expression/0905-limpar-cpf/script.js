const cpfs = document.querySelectorAll('.cpf li')

function elementasInnerText([...elements]){
  return elements .map(element => element.innerText)
}

const limparCPF = (cpf) =>{
  return cpf.replace(/\D/g, '')
}

const construirCPF = (cpf) =>{
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')
}

const formatarCPFS = (cpfs) =>{
  return cpfs.map(limparCPF).map(construirCPF)
}

const substituirCPFS = (cpfsElements) =>{
  const cpfs = elementasInnerText(cpfsElements)
  const cpfsFormatados = formatarCPFS(cpfs)
  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index]
  });
}
substituirCPFS(cpfs)

const resultado = elementasInnerText(cpfs)
