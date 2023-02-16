import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";


const Login = () =>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault()
        const response = await fetch(import.meta.env.VITE_BACKEND+'/login',
        {
          method:'POST',
          headers: {
            'Content-Type':'application/json',
            // 'Authorization': 'bearer xxxxxxx'
          },
          body: JSON.stringify( { email,  password } )  
        })
        if(!response.ok){
            console.log('error en la peticion:')
        }else{
            //TODO mostrar un mensaje tipo toast
            navigate('/me')
            const json = await response.json()
            localStorage.setItem('token', json.token);
        }
    }
    return <>
        <h1>Login</h1>
        <form onSubmit={handleSubmit} className="m-5  bg-white border-4 border-indigo-500/100  flex flex-col">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="email">Email</label>
            <input className="border-2 border-indigo-500/100  m-auto w-52" type="text" id="email" value={email} 
                onChange={(e)=>setEmail(e.target.value)}/>
        
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="password">Password</label>
            <input className="border-2 border-indigo-500/100  m-auto w-52" type="password" id="password" value={password} 
                onChange={(e)=>setPassword(e.target.value)}/>
            
            <div className="mt-4">
                <Button type='submit'>Loguearse</Button>
            </div>
        </form>
    </>

}

export default Login