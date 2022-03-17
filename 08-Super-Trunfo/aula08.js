var carta1 = {
    nome: "Naruto",
    imagem: "https://f.i.uol.com.br/fotografia/2021/02/18/1613671083602eaaab101f1_1613671083_3x2_md.jpg",
    atributos:{
        ninjutsu: 10,
        taijutsu: 7,
        genjutsu: 1,
    }
};

var carta2 = {
    nome: "Itachi",
    imagem: "https://pbs.twimg.com/media/Ec2DJV9XkAYTM3X.jpg",
    atributos:{
        ninjutsu: 10,
        taijutsu: 5,
        genjutsu: 10,
    }
};

var carta3 = {
    nome: "Sasuke",
    imagem:"https://uploads.spiritfanfiction.com/historias/capitulos/202107/imagine-uchiha-sasuke-em-boruto-22683938-180720211733.jpg",
    atributos:{
        ninjutsu: 10,
        taijutsu: 3,
        genjutsu: 6,

    }
};

var cartas = [carta1, carta2, carta3]
var cartaMaquina
var cartaJogador

function sortearCarta()
{
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while(numeroCartaJogador == numeroCartaMaquina)
    {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador) 

    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibirCartaJogador()
}

function obtemAtributoSelecionado()
{
    var radioAtributos = document.getElementsByName('atributo')

    for (var i = 0; i < radioAtributos.length; i++)
    {
        if(radioAtributos[i].checked == true)
        {
            return radioAtributos[i].value
        }
    }
}

function jogar()
{
    var atributoSelecionado = obtemAtributoSelecionado()
    var divResultado = document.getElementById('resultado')
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if(valorCartaJogador > valorCartaMaquina)
    {
        htmlResultado = "<p class='resultado-final'>Venceu</p>"
    }
    else if(valorCartaJogador < valorCartaMaquina)
    {
        htmlResultado = "<p class='resultado-final'>Perdeu</p>"
    }
    else
    {
        htmlResultado = "<p class='resultado-final'>Empatou</p>"
    }
    divResultado.innerHTML = htmlResultado
    document.getElementById('btnJogar').disabled = true
    exibirCartaMaquina()
}

function exibirCartaJogador()
{
    var divCartaJogador = document.getElementById('carta-jogador')
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHtml = "<div id ='opcoes' class='carta-status'>"

    var opcoesTexto = ""

    for(var atributo in cartaJogador.atributos)
    {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }

    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
    divCartaJogador.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>"
}

function exibirCartaMaquina()
{
    var divCartaMaquina = document.getElementById('carta-maquina')
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var moldura ='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'

    var opcoesTexto = ""

    for(var atributo in cartaMaquina.atributos)
    {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
    }

    var tagHtml = "<div id ='opcoes' class='carta-status'>"
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    divCartaMaquina.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>"

}