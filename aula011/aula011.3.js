function calc() {
  let inputSpeed = document.querySelector('input#speed')
  let res = document.querySelector('div#result')
  let spd = Number(inputSpeed.value)
  res.innerHTML = `Sua Velocidade é de <strong>${spd}Km/h</strong>.`

  if (spd > 60) {
    res.innerHTML += `<p> Você ultrapassou o limite de velocidade permitida! </p>
    <p> Você foi <strong> MULTADO</strong></p>`
  }

  res.innerHTML += `<p>Dirija com segurança!</p>`
}