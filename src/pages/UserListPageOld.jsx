import { useEffect } from "react"
import { useState } from "react"

const UserList = () => {
    const {users, loading, error} = useUsers()
 
    if(error) return <div>Error {error}</div>

  /*  useEffect(()=>{
        async function callApi(){
            setLoading(true)
            console.log('llamando')
            console.log(import.meta.env.VITE_BACKEND)
            const request = await fetch(import.meta.env.VITE_BACKEND+'/user/')
            const json = await request.json()
            setUsers(json)
            setLoading(false)
        }
        callApi()
    },[])
*/
    if(loading) return <div>Loading...</div>
    if(!users.length) return <div>'No hay usuarios'</div>

    return <>
        <h1>Lista usuarios  ({users.length})</h1>
        {users.map(user => 
            <div key={user._id}>{user.email}</div>
        )}
    </>
}

export default UserList
