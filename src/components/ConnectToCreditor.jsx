import { useState } from "react"

const ConnectToCreditor = () =>{
    const [email, setEmail] = useState('')
    async function handleSubmit(e){
        e.preventDefault()
        const token = localStorage.getItem("token");
        const response = await fetch(import.meta.env.VITE_BACKEND+'/connection/connectToCreditor/'+email,
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + token,
            }
        })
        if(!response.ok) console.error('fallo al conectarse con el acreedor')
        const data = await response.json()
        console.log(data)
    }
    return <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" value={email} 
        onChange={(e)=>setEmail(e.target.value)}/>
        <button>Connectar con el acreedor</button>
    </form>
}

export default ConnectToCreditor
// Tendra un formulario con el campo email
// cuando se envie el formulario
// se llamará al endpoint del backend /connectToCreditor/:email