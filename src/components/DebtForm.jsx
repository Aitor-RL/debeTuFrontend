import { useState } from "react";

const DebtForm = ({idConnection, onSubmit}) =>{
    const [amount, setAmount] = useState(0)
    const [concept, setConcept] = useState('')

    return <>
    <form onSubmit={onSubmit} className="flex flex-row gap-5">
        <label htmlFor="concept">Concepto:</label>
        <input type="text" className="h-6 w-14" name="concept" id="concept" value={concept} 
            onChange={(e)=>setConcept(e.target.value)}/>

        <label htmlFor="amount">Amount2</label>
        <input type="text" className="h-6 w-14" name="amount" id="amount" value={amount} 
            onChange={(e)=>setAmount(e.target.value)}/>
    
        <button type="submit">Add</button>
    </form>
</>
}

export default DebtForm