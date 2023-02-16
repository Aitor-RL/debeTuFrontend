import { useState, useEffect } from "react"

const useUsers = () => {
  
        const [users, setUsers] = useState([])
        const [loading ,setLoading] = useState(false)
        const [error, setError] = useState(null)
    
        useEffect(()=>{
            async function callApi(){
                setLoading(true)
                const request = await fetch(import.meta.env.VITE_BACKEND+'/user/')
                if(!request.ok) setError ('Fallo al conectarme con laAPI')
                const json = await request.json()
                setUsers(json)
                setLoading(false)
            }
            callApi()
        },[])


        return {users,loading,error}
}


export default useUsers