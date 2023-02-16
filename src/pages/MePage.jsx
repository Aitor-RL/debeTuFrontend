import { useState } from "react";
import { useEffect } from "react";

const Me = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");
    async function call() {
      const response = await fetch("http://localhost:3000/user/me", {
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
      <h1>Mis datos</h1>
      <div>Nombre: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>id: {user._id}</div>
    </>
  );
};
export default Me;
