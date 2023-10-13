function naoposso(){
        var novaPosicaoX = Math.floor(Math.random() * (window.innerWidth - meuBotao.offsetWidth));
        var novaPosicaoY = Math.floor(Math.random() * (window.innerHeight - meuBotao.offsetHeight));
        
        meuBotao.style.left = novaPosicaoX + "px";
        meuBotao.style.top = novaPosicaoY + "px";
}
console.log(novaPosicaoX)