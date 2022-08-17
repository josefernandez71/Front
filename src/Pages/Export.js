import React,{useState,useEffect} from "react";
import { DateTableE } from "../Component/DataTableE";
import '../styles/exports.scss';
const API=process.env.REACT_APP_BACKEND
export default function Export (){
    const [response,setresponse]= useState("");
    const pedirdatos=async()=>{
        const res= await fetch(`${API}/reporte`,{
          method: "POST",
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body:JSON.stringify({
              user:JSON.parse(sessionStorage.getItem('user'))
          })
        })
        const response= await res.json(); 
        console.log(response);
    }
    useEffect(() => {
        pedirdatos()
    }, []);

    return(
        <>
        <div id="eje3">
            <DateTableE/>
        </div>
        </>
    )
}