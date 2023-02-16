import { useEffect, useState } from "react";
import DebtForm from "../components/debtForm";
import Debts from "../components/Debts";

const MyDebtors = () => {
  const [debtors, setDebtors] = useState([])


  useEffect(() => {
      const token = localStorage.getItem("token");
      const fetchingDebtors = async () => {
        const request = await fetch(import.meta.env.VITE_BACKEND+'/connectio/getMyDebtors',
        {
          method: "GET",
          headers: {
          "Content-Type": "application/json",
          "Authorization": "bearer " + token,
          }
        })
        const arrayDeConexiones = await request.json()
        setDebtors(arrayDeConexiones)
      }
  
      fetchingDebtors()
    }, [])

  async function handleRemoveDebt(idConnection, idDebt){
    const token = localStorage.getItem("token");
    const response = await fetch(import.meta.env.VITE_BACKEND+`/connection/removeDebt/${idConnection}/${idDebt}`,
    {
      method:'DELETE',
      headers: {
        'Content-Type':'application/json',
        "Authorization": "bearer " + token,
      },
    })
    const data = await response.json()
    //TODO refrescar la lista
    const newDebtors = [...debtors]
    const debtorToRemoveDebt = newDebtors.find(e=>e._id === idConnection)
    debtorToRemoveDebt.debts = debtorToRemoveDebt.debts.filter(e=>e._id !== idDebt)
    setDebtors(newDebtors)
  }

  async function handleAddDebt(event, idConnection){
    event.preventDefault()
    let concept = event.target.concept.value
    let amount = event.target.amount.value


    const token = localStorage.getItem("token");
      const response = await fetch(import.meta.env.VITE_BACKEND+'/connection/addDebt/'+idConnection,
      {
        method:'POST',
        headers: {
          'Content-Type':'application/json',
          "Authorization": "bearer " + token,
        },
        body: JSON.stringify( { amount, concept } )  
      })

    if(!response.ok){
        console.log('error en la peticion:')
    }else{
        console.log('deuda añadida')
    }
    const data = await response.json()
    console.log(data.debts[data.debts.length-1])
    // TODO Actualizar
    const newDebtors = [...debtors]
    const debtorToAddDebt = newDebtors.find(e=>e._id === idConnection)
    debtorToAddDebt.debts.push({ _id:data.debts[data.debts.length-1]._id, amount, concept })
    setDebtors(newDebtors)
  }

  return <>
      <h1>Listado de mis deudores</h1>
      <ul>
      {debtors.map((debtor) => (
        <li key={debtor._id}>
          <h2>
            Deudor: {debtor.debtor.name} ({debtor.debtor.email})
          </h2>
          <Debts 
            handleRemove={(idDebt)=>handleRemoveDebt(debtor._id,idDebt)} 
            debts={debtor.debts}/>

          <DebtForm onSubmit={(e)=>handleAddDebt(e, debtor._id)} idConnection={debtor._id}/>
        </li>
      ))}
    </ul>
  </>
}

export default MyDebtors