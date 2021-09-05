let inputCountry = document.querySelector('input#country')
let answer = document.querySelector('div#answer')
let result = String(inputCountry.value).toLowerCase()
result.innerHTML = `You're living in ${result}`

function country() {
  if (result == 'Brasil' || result == 'Brazil' || result == 'BR') {
    result.innerHTML = `<p>Hey <strong>${inputCountry}</strong> native! I'm Brazilian too! Nice too meet u!</p>`
  }

  else {
    result.innerHTML = `<p> Hello <strong>${inputCountry}</strong> native! How u're doing?</p>`
  }
}

//corrigir