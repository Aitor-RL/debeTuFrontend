async function fetchAllMessages(){
    const response = await fetch(import.meta.env.VITE_BACKEND+'/message/')
    const json = await response.json()
    return json
}

async function addNewMessage(data){
    const response = await fetch(import.meta.env.VITE_BACKEND+'/message/',
    {
     method: 'POST',
     headers: {
         'Content-Type':'application/json'
     },
     body: JSON.stringify(data)
    }
    )
    
    if(!response.ok){
     console.log('error al hacer la inserción')
    }
    const newMessage = await response.json()
    return newMessage
}

export {fetchAllMessages, addNewMessage}