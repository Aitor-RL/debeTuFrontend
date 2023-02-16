async function fetchAllMessages(){
    const response = await fetch('http://localhost:3000/message/')
    const json = await response.json()
    return json
}

async function addNewMessage(data){
    const response = await fetch('http://localhost:3000/message/',
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