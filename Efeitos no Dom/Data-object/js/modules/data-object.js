export default function initFuncionamento(){

}
const funcionamento = document.querySelector('[data-semana]')
const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)
console.log(diasSemana)
console.log(horarioSemana)

const dataAgora = new Date()
const diaAgora = dataAgora.getDay()
const horaAgora = dataAgora.getHours()
const teste = [1,2,3,4,5].indexOf(5)

const semanaAberto = diasSemana.indexOf(diaAgora) !== -1
const horarioAberto = horaAgora >= horarioSemana[0] && horaAgora < horarioSemana

if (semanaAberto && horarioAberto){
  funcionamento.classList.add('aberto')
}