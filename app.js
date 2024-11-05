function criaCartao(categoria, pergunta, resposta) {
    let cartao = document.createElement('article')
        cartao.className = 'cartao'
        cartao.innerHTML =
        `<div class="cartao-conteudo">
                    <h3>${categoria}</h3>
                    <div class="cartao-conteudo-pergunta">
                        <p>${pergunta}</p>
                    </div>

                    <div class="cartao-conteudo-resposta">
                        <p>${resposta}</p>
                    </div>
                </div>`
    
}