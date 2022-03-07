function calcular()
{
    var nota1 = document.getElementById('txtn1')
    var nota2 = document.getElementById('txtn2')
    var nota3 = document.getElementById('txtn3')
    var nota4 = document.getElementById('txtn4')
    var res = document.getElementById('res')
    var sit = document.getElementById('situacao')
    var n1 = Number(nota1.value)
    var n2 = Number(nota2.value)
    var n3 = Number(nota3.value)
    var n4 = Number(nota4.value)

    var media = (n1 + n2 + n3 + n4) / 4
    res.innerHTML = media

    if (media >= 6)
    {
        sit.innerHTML = 'Aprovado'    
    }
    else
    {
        sit.innerHTML = 'Reprovado'
    }
}

function converter()
{
    var t1 = document.getElementById('temp')
    var res = document.getElementById('resultado')
    var temp = Number(t1.value)
    var calculo
    var escolha = document.getElementsByName('temperatura')

    if(escolha[0].checked)
    {
        calculo = (temp *1.8) + 32
    }
    else 
    {
        calculo = (temp - 32) / 1.8
    }

    res.innerHTML = calculo.toFixed(2)
}
