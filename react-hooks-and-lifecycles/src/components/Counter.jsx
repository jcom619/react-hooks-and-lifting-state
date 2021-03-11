import { useState, useEffect } from "react";

export default function Counter() {




  const [count, setCount] = useState(1);
   /* const [user, setUser] = useState({ name: "Joshua" }); */



  useEffect(() => {
     return(
        
     console.log('some string after render')
    console.log(count)
    returrn () => {
      console.log("on evry moun"t)
      
      
    }, [user]);
const handleIncreasedCount () => {
   setCount(count + 1)
   
   return (
      <div>
      <h1>Hola</h1>
      <button onClick={handleIncreasedCount}>increase count</button>
      </div>
      
   }
   )
