function Converter()
{
    var valorElemento = document.getElementById('valor')
    var resultado = document.getElementById('valorConvertido')
    var dolar = parseFloat(valorElemento.value)
    var valorEmReal = dolar * 5.00

    resultado.innerHTML = "O valor em real eh R$"+ valorEmReal.toFixed(2)
    console.log(moeda)
}