import { useState } from "react";



const useForm =  (initialState) => {


  const [user, setUser] = useState(initialState);

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return { user, handleChange };
}







export default  useForm   