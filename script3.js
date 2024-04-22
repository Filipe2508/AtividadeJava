function inverter(){
  var Entrada = document.getElementById("Entrada");
  var texto = Entrada.value;
  var textoInvertido = texto.split('').reverse().join('');
  var EntInvertida = document.getElementById("EntInvertida");
  EntInvertida.value = textoInvertido;
}