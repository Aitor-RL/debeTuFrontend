import { useState } from "react"
import { useNavigate } from "react-router-dom";

const UserForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault()
        const response = await fetch('http://localhost:3000/user',
        {
          method:'POST',
          headers: {
            'Content-Type':'application/json',
            // 'Authorization': 'bearer xxxxxxx'
          },
          body: JSON.stringify( { name, email,  password } )  
        })
        if(!response.ok){
            console.log('error en la peticion:')
        }else{
            //TODO mostrar un mensaje tipo toast
            navigate('/userList')
        }

    }

    return <>
        <h1>Formulario registro</h1>
        <form onSubmit={handleSubmit} className=" m-5  bg-white border-4 border-indigo-500/100  flex flex-col">
            <label htmlFor="name">Nombre</label>
            <input className="border-2 border-indigo-500/100  m-auto w-52" type="text" id="name" value={name} 
                onChange={(e)=>setName(e.target.value)}/>

            <label htmlFor="email">Email</label>
            <input className="border-2 border-indigo-500/100  m-auto w-52 " type="text" id="email" value={email} 
                onChange={(e)=>setEmail(e.target.value)}/>
        
            <label htmlFor="password">Password</label>
            <input className="border-2 border-indigo-500/100 m-auto w-52" type="password" id="password" value={password} 
                onChange={(e)=>setPassword(e.target.value)}/>

            <button className="m-auto mb-5 w-52 text-center  mt-7 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full bg-green-300" type="submit">Registro</button>
        </form>
    </>
}

export default UserForm