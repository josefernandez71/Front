import React,{useState,useEffect} from "react";
import DatatableRTA  from "../Component/DatatableRTA";
const API=process.env.REACT_APP_BACKEND;

export default function Rta(){
    const [data,setdate]=useState("");
    
    const obtenerDatos=async()=>{
        const res = await fetch(`${API}/RTS`,{
          method: "POST",
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body:JSON.stringify({
              user:JSON.parse(sessionStorage.getItem('user'))
          })
        })
        const data = await res.json();
        setdate(data)

    }
    useEffect(() => {
        obtenerDatos()
    }, []);
      
    
    return(
        <div>
            <div id="eje3">
                <button onClick={obtenerDatos}>Actualizar</button>
                <DatatableRTA Name={data} />
            </div>
        </div>
        
    )
}