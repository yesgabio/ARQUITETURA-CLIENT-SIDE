import { useState } from "react";

export function ControlledForm(){
    const [formData, setFormData] = useState({nome: 'Luke', jedi:true})
    const handleNameChange = (event) => {
        setFormData({
            ...formData,
            nome: event.target.value
        })
    }
    const handleJediChange = (event) => {
        setFormData({
            ...formData,
            jedi: event.target.checked
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Nome: ${formData.nome} Jedi: ${formData.jedi}`)
    }
    return (
        <>
        <h1>Controller Form</h1>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>
                    <p>Nome</p>
                    <input type="text" name="nome" value={formData.nome} onChange={handleNameChange} />
                </label>
                <label>
                    <p>Jedi</p>
                    <input type="checkbox" name="jedi" value={formData.jedi} onChange={handleJediChange}/>
                </label>
            </fieldset>
            <button type="submit">Enviar</button>
        </form>
        </>
    )
}