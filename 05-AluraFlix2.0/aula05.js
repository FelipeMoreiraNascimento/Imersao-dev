function adicionarFilme()
{
    var filmeFavorito = document.getElementById('filme').value
    if(filmeFavorito.endsWith(".jpg"))
    {
        listaFilmesNaTela(filmeFavorito)
    }
    else
    {
        console.error("Endereço de filme invalido")
    }

    document.getElementById('filme').value = ""
}

function listaFilmesNaTela(filme)
{
    var elementoFilmeFavorito = "<img src=" + filme + ">"
    var listaFilmes = document.getElementById('listaFilmes')
    listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilmeFavorito
}