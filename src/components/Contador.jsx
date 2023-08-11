import { useState } from "react";

export function Contador() {
    const [contagem, setContagem] = useState(0)

    function newHandlerClick(){
        setContagem(contagem + 1)
    }
    return (
        <>
        <button onClick={newHandlerClick}>Clicar!</button>
        <span>contagem atual {contagem}</span>
        </>
    )
}