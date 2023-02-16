
import useUsers from "../hooks/useUsers"
const UserList = () => {
     const {users, loading, error} = useUsers()

  
    if(error) return <div>Error {error}</div>
    if(loading) return <div>Loading...</div>
    if(!users.length) return <div>'No hay usuarios'</div>

    return <>
    <div className=" m-5  bg-white border-4 border-indigo-500/100  flex flex-col">
        <h1>Lista usuarios  ({users.length})</h1>
        {users.map(user => 
            <div key={user._id}>{user.email}</div>
        )}
        </div>
    </>
}

export default UserList