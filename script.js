function ConverterReal() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = valorEmDolarNumerico * 5.29;
  var valorReal = valorEmReal.toFixed(2);
  console.log(valorReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "R$: " + valorReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterDolar() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmDolar = valorEmRealNumerico / 5.29;
  var valorDolar = valorEmDolar.toFixed(2);
  console.log(valorDolar);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "$: " + valorDolar;
  elementoValorConvertido.innerHTML = valorConvertido;
}