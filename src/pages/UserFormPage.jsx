import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import useForm from '../hooks/useForm.jsx'

const INITIAL_STATE = {
    name: "",
    email: "",
    password: "",
  }


const UserForm = () => {
 
    


    const { user, handleChange } = useForm(INITIAL_STATE);
    const navigate = useNavigate();
    const [error , setError] = useState(null)


   

    async function handleSubmit(e){
        e.preventDefault()
        const response = await fetch(import.meta.env.VITE_BACKEND+'/user',
        {
          method:'POST',
          headers: {
            'Content-Type':'application/json',
            // 'Authorization': 'bearer xxxxxxx'
          },
          body: JSON.stringify( { user } )  
        })
        if(!response.ok){
            console.log('error en la peticion:')
        }else{
            //TODO mostrar un mensaje tipo toast
            navigate('/userList')
        }

    }


    useEffect( () => {
//TODO no mostrar el error la primera vez


        if(!user.name){
            setError('El nombre no puede estar vacio ')
            return
        }
        if(user.name.length < 3){
        setError('La longitud del nombre tiene que ser mayor de 2')
        return
        }
        setError(null)
    }, [user.name])




    return <>
        <h1>Formulario registro</h1>
        <form onSubmit={handleSubmit} className=" m-5  bg-white border-4 border-indigo-500/100  flex flex-col">
            <label htmlFor="name">Nombre</label>
            <input className="border-2 border-indigo-500/100  m-auto w-52" type="text" id="name" name="name" value={user.name} 
                onChange={handleChange}/>

            <label htmlFor="email">Email</label>
            <input className="border-2 border-indigo-500/100  m-auto w-52 " type="text" id="email" name="email" value={user.email} 
                onChange={handleChange}/>
        
            <label htmlFor="password">Password</label>
            <input className="border-2 border-indigo-500/100 m-auto w-52" type="password" id="password" name="password" value={user.password} 
                onChange={handleChange}/>

            <button className="m-auto mb-5 w-52 text-center  mt-7 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full bg-green-300" type="submit">Registro</button>
        </form>

        { error && <p style={{color:'red'}}>{error}</p>}
    </>
}

export default UserForm