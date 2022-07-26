let compra = confirm('Desea comprar un pasaje?')
if (compra) {
  calcularViaje()
}else{
  alert('Hasta luego')
}
function calcularViaje() {
  let resultado = 0;
  let destino;
  let suma;
  let cuotas;
  do {
    destino = prompt('Elejí tu destino: Rio, Londres o New York').toLowerCase()
    let dias = Number(prompt('Ingrese la cantidad de días'));
    let adultos = Number(prompt('Ingrese la cantidad de adultos'));
    let menores = Number(prompt('Ingrese la cantidad de niños'))
    suma = dias * 15000 + adultos * 25000 + menores * 15000;
    if (!(destino == 'rio' || destino == 'londres' || destino == 'new york') || isNaN(suma)) {
      alert('datos ingresados incorrectos, intenta nuevamente')
    }
  } while (!(destino == 'rio' || destino == 'londres' || destino == 'new york') || isNaN(suma));
  if (destino === 'rio') {
    mostrarResultado(100000)
  } else if (destino === 'londres') {
    mostrarResultado(200000)
  } else if (destino === 'new york') {
    mostrarResultado(250000)
  }
  function mostrarResultado(precioPasaje) {
    alert(resultado + suma + precioPasaje + ' pesos es el valor de tu viaje')
    cuotas = confirm('Desea pagar en 3 cuotas?')
    if (cuotas) {
      alert((resultado + suma + precioPasaje) / 3 + ' pesos es el valor de cada cuota')
    }else{
      alert('Hasta luego')
    }
  }
  }

