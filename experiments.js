let bulbOn = 0;

function lightOn() {
  if (bulbOn === 0) {
    document.getElementById('bulbOff').id = 'bulbOnn';
  }
}

document.getElementById('switchOn').onclick = lightOn;

function lightOff() {
  if (bulbOn != 1) {
    document.getElementById('bulbOnn').id = 'bulbOff';
  }
}

document.getElementById('switchOff').onclick = lightOff;