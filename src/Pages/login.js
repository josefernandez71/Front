import React,{useState,useCallback} from "react";
import {useNavigate} from "react-router-dom";
import '../styles/login.scss';

const Login = ()=>{

    const [login,setlogin] = useState("false");
    const [user,setuser] = useState("");
    const [pass,setpass] = useState("");

    const Navigate = useNavigate();
    const changePageMenu = useCallback(() => Navigate('/Layout',{replace:true}),[Navigate]);
    const changePageState = useCallback(() => Navigate('/states',{replace:true}),[Navigate]);
    const Handlesesion = (e) =>{
        if(user.length === 0 || pass.length === 0){
            alert("Complete los campos");
        }else{
            if(user === "juan" && pass === "123"){
                setlogin("true"); 
                changePageMenu();
            }else
                if(user === "jose" && pass === "789"){
                    setlogin(true);
                    changePageState();
                }else{
                setlogin("false");
                alert("Usuario y/o contraseña incorrectas");
                setuser("");
                setpass("");
                document.getElementById('user').value="";
                document.getElementById('pass').value="";
                document.getElementById('user').focus();
            }
        }
    }
    return(
        <>
            <div id="Container">
                <div id="sideL">
                    <p></p>
                </div>
                <div id="sideR">
                    <p></p>
                    <form>
                    <input placeholder="User" id="user" onChange={(e)=>setuser(e.target.value)}></input>
                    <input type="password" id="pass" placeholder="Pass" onChange={(e)=>setpass(e.target.value)}></input>
                    <span>{user}</span>
                    <span>{pass}</span>
                    <input type="submit" onClick={Handlesesion} value="Ingresar"/>
                    </form>
                </div>
            </div>
        </>
        )
}

export default Login;