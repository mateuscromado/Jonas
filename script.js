var center = document.querySelector(".center")
//Adicione produtos atraves desse objeto produtos abaixo
var produtos = [

    {
        titulo1: "lefn",
        preco1: "", //OBS: O preço deve ser colocado no seginte modelo 100,00 ou 20,00 o resto vai ser adicionado dinamicamente com css
        cartao1: "",//OBS: Nesse campo adicione apenas as parcelas, ex: se forem 10x sem juros:   cartao1:"10", pois são 10 vezes sem juros
        tipo: "anel",
        imagem: "", //OBS:Ocaminho da imagem deve ser definido por aqui, coloque apenas o link da imagem ex : https://www.imagemquepegueinainternet.com
    },
    {
        titulo1: "fjf",
        preco1: "", //OBS: O preço deve ser colocado no seginte modelo 100,00 ou 20,00 o resto vai ser adicionado dinamicamente com css
        cartao1: "",//OBS: Nesse campo adicione apenas as parcelas, ex: se forem 10x sem juros:   cartao1:"10", pois são 10 vezes sem juros
        tipo: "anel",
        imagem: "", //OBS:Ocaminho da imagem deve ser definido por aqui, coloque apenas o link da imagem ex : https://www.imagemquepegueinainternet.com
    },
    {
        titulo1: "",
        preco1: "", //OBS: O preço deve ser colocado no seginte modelo 100,00 ou 20,00 o resto vai ser adicionado dinamicamente com css
        cartao1: "",//OBS: Nesse campo adicione apenas as parcelas, ex: se forem 10x sem juros:   cartao1:"10", pois são 10 vezes sem juros
        tipo: "anel",
        imagem: "", //OBS:Ocaminho da imagem deve ser definido por aqui, coloque apenas o link da imagem ex : https://www.imagemquepegueinainternet.com
    },
    {
        titulo1: "",
        preco1: "", //OBS: O preço deve ser colocado no seginte modelo 100,00 ou 20,00 o resto vai ser adicionado dinamicamente com css
        cartao1: "",//OBS: Nesse campo adicione apenas as parcelas, ex: se forem 10x sem juros:   cartao1:"10", pois são 10 vezes sem juros
        tipo: "anel",
        imagem: "", //OBS:Ocaminho da imagem deve ser definido por aqui, coloque apenas o link da imagem ex : https://www.imagemquepegueinainternet.com
    },


]

function adicionarProduto() {
    for (let i = 0; i < produtos.length; i++) {

        center.innerHTML += `
<div class="produto">


<div class="produto-image">
</div>

<h2 id="titulo">Anel de prata</h2>
<h2 id="preco">100,00</h2>
<h2 id="cartao">Em até <span id="parcelas">10</span>x sem juros</h2>

<a href="">
    <button>Comprar agora</button>
</a>
</div>

`

    }
}


console.log(produtos.index)


