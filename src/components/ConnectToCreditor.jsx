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
    return <form onSubmit={handleSubmit} className="m-5  bg-white border-4 border-indigo-500/100  flex flex-col">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">Email:</label>
        <input className="border-2 border-indigo-500/100  m-auto w-52" type="text" id="email" value={email} 
        onChange={(e)=>setEmail(e.target.value)}/>
        <button className="m-auto mb-5 w-52 text-center text-xs  mt-7 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full bg-green-300">Connectar con el acreedor</button>
    </form>
}

export default ConnectToCreditor
// Tendra un formulario con el campo email
// cuando se envie el formulario
// se llamará al endpoint del backend /connectToCreditor/:email