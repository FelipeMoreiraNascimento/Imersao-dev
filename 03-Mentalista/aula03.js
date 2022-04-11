function Comecar()
{
    var numeroSecreto = parseInt(Math.random() * 100)
    var resultado = document.getElementById('resultado')
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

    validaNumeroSecreto(chances, numeroSecreto, resultado)
}

function validaNumeroSecreto(chances, numeroSecreto, resultado)
{
    Chutar()
    while (chances > 0)
    {
        if (Chutar() == numeroSecreto)
        {
            resultado.innerHTML = 'Você acertou, o numero secreto eh ' + numeroSecreto
            break
        }
        else if (Chutar() > numeroSecreto)
        {
            resultado.innerHTML = 'O numero secreto eh menor'
            chances--;
        }
        else
        {
            resultado.innerHTML = 'O numero secreto eh maior'
            chances--;
        } 
        Chutar()
    }
}

function Chutar()
{
    var chute = document.getElementById('chute').value
    return chute;
}