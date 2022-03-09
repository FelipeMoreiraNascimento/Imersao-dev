function Chutar()
{
    var numeroSecreto = parseInt(Math.random() * 100)
    var valor = parseInt(document.getElementById("valor").value)
    var resultado = document.getElementById('resultado')
    var numero = document.getElementById('numero')
    var tentativas = document.getElementById('tentativas')
    var chances
    var nivel = document.getElementsByName('nivel')

    if(nivel[0].checked)
    {
        chances = 7
        tentativas.innerHTML = 'Voce tem ' + chances + ' tentativas'
    }
    else if (nivel[1].checked) 
    {
        chances = 5
        tentativas.innerHTML = 'Voce tem ' + chances + ' tentativas'

    }
    else if(nivel[2].checked)
    {
        chances = 3
        tentativas.innerHTML = 'Voce tem ' + chances + ' tentativas'
    }

    while (chances > 1) 
    {
        if (valor == numeroSecreto)
        {
            resultado.innerHTML = 'Você acertou, o numero secreto eh ' + numeroSecreto
            break
        }
        else if(valor > 100 || valor < 0)
        {
            window.alert('Digite um numero de 0 a 10')
        }
        else if (valor > numeroSecreto)
        {
            resultado.innerHTML = 'O numero secreto eh menor'
            chances--
        }
        else
        {
            resultado.innerHTML = 'O numero secreto eh maior'
            chances--
        }
        tentativas.innerHTML = 'Voce tem ' + chances + ' tentativas'
    }

    numero.innerHTML = 'Obrigado por jogar!!'

}