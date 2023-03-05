import { useState } from "react";
import { useEffect } from "react";

const Me = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    async function call() {
      const response = await fetch(import.meta.env.VITE_BACKEND+"/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "bearer " + token,
        },
      });
      const data = await response.json();
      setUser(data.userLogued);
    }
    call(); 
  }, []);
  return (
    <>
    <div className="m-5  bg-white border-4 border-indigo-500/100  flex flex-col">
      <h1>Mis datos</h1>
      <div>Nombre: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>id: {user._id}</div>



    </div>
     
    </>
  );
};
export default Me;
