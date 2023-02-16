import { useState, useEffect } from "react"
import { addNewMessage, fetchAllMessages } from "../services/messageService"

const Messages = () => {
    const [messages, setMessages] = useState([])
    const [msg, setMsg] = useState("")

    async function peticion(){
        const json = await fetchAllMessages()
        setMessages(json)
        console.log('se ha llamado a peticion')
    }


    useEffect( ()=>{
        peticion()
        const programmer = setInterval( peticion ,   2000  )
        return ()=>clearInterval(programmer)
    } ,  [] )




    const handleSubmit = async (e) =>{
       e.preventDefault()
       const newMessage = await addNewMessage({msg})
       console.log(newMessage)
       //messages.push(newMessage)<--- malll
       setMessages( [...messages, newMessage] )
       setMsg("")
       
    }

    return (
        <>
            <h1>Lista de mensajes del chat</h1>
            <div>
                {
                messages.map(message => 
                    <div key={message._id}>{message.msg}</div>
                )
                }
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="msg" 
                value={msg} onChange={(e)=>setMsg(e.target.value)}/>
                <button type="submit">Enviar</button>
            </form>

        </>
    )
}
export default Messages