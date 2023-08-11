export function MeuBotao(){
    function handleClick(){
        alert("Você clicou no botão!")
    }

    return (
        <button id="botaoClicavel" onClick={handleClick}>CLIQUE AQUI!</button>
    )
}