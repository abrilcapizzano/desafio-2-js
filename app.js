let resultado = 0
function conversor () {
  let destino = prompt ('Ingrese el destino: Rio, Londres o Perú ').toLowerCase() 
  let dias = Number (prompt ('Ingrese la cantidad de días'))
  let adultos = Number (prompt('Ingrese la cantidad de adultos'))
  let menores = Number (prompt('Ingrese la cantidad de niños'))
let suma = (dias * 5000) + (adultos * 20000) + (menores * 10000)
   if(destino ===  'rio'){
      resultado = suma + 100000
     }
else if(destino === 'londres'){
      resultado = suma + 170000
    }
else if(destino === 'perú'){
      resultado = suma + 140000
}else{
  alert('Ese destino no existe')
  let destino = prompt ('Ingrese el destino: Rio, Londres o Perú ').toLowerCase()
   if(destino ===  'rio'){
    resultado = suma + 100000
   }
else if(destino === 'londres'){
    resultado = suma + 170000
  }
else if(destino === 'perú'){
    resultado = suma + 140000
}
}}
function mostrar() {
  alert (resultado + ' pesos')
}
console.log (conversor)
console.log (mostrar)
conversor()
mostrar(resultado)