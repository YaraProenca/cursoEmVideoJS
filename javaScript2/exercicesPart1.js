function load() {
  let msg = document.querySelector('#msg')
  let img = document.querySelector('#img')
  let date = new Date()
  let hour = date.getHours()
  
  msg.innerHTML = `Agora são ${hour} horas.`

  if (hour >= 0 && hour <=12) {
    document.body.style.background ='#fe8e7a'
    img.src = './img/1.png'
  }

  else if (hour >=13 && hour <= 18 ){
    document.body.style.background = '#9da191'
    img.src = './img/2.png'
  }

  else{
    document.body.style.background ='#122128'
    img.src = './img/3.png'
  }
}
onload = load