import { useEffect, useState } from "react";
import ConnectToCreditor from "../components/ConnectToCreditor"
import Debts from '../components/Debts'

const MyCreditors = () => {
    const [creditors, setCreditors] = useState([])

    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchingCreditors = async () => {
          const request = await fetch(import.meta.env.VITE_BACKEND+'/getMyCreditors',
          {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + token,
            }
          })
          const arrayDeConexiones = await request.json()
          setCreditors(arrayDeConexiones)
        }
    
        fetchingCreditors()
      }, [])



   

   

    return <>
        <ConnectToCreditor/>
        <h1>Listado de mis acreedores</h1>
        <ul>
        {creditors.map((creditor) => (
          <li key={creditor._id}>
            <h2>
              Acreedor: {creditor.creditor.name} ({creditor.creditor.email})
            </h2>
            <Debts debts={creditor.debts}/>
          </li>
        ))}
      </ul>
    </>
}

export default MyCreditors