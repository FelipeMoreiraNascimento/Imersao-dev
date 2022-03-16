var carta1 = {
    nome: "Naruto",
    atributos:{
        ataque: 10,
        defesa: 9,
        forca: 10,
        chakra: 10
    }
};

var carta2 = {
    nome: "Itachi",
    atributos:{
        ataque: 10,
        defesa: 8,
        forca: 9,

        chakra: 7
    }
};

var carta3 = {
    nome: "Sasuke",
    atributos:{
        ataque: 10,
        defesa: 7,
        forca: 9,
        chakra: 8
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

    exibirOpcoes()
}

function exibirOpcoes()
{
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""

    for(var atributo in cartaJogador.atributos)
    {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
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
    var elementoResultado = document.getElementById('resultado')
    var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

    if(valorCartaJogador > valorCartaMaquina)
    {
        elementoResultado.innerHTML = "Você venceu!"
    }
    else if(valorCartaJogador < valorCartaMaquina)
    {
        elementoResultado.innerHTML = "Você perdeu, a carta da máquina é maior!!"
    }
    else
    {
        elementoResultado.innerHTML = "Empatou!!"
    }

    console.log(cartaMaquina)

}
