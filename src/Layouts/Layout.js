import {Outlet,Link,useNavigate} from "react-router-dom";
import React,{useCallback} from "react";
import '../styles/layout.scss';


const Layout = () =>{
    const Navigate = useNavigate();
    const logOUT = useCallback(() => Navigate('/',{replace:true}),[Navigate]);

    return(
        <>
        <div id="menu">
            <button id="hidden"></button>
            <button id="DESP"></button>
            <div id="btnss">
                <Link to="/Layout"><button id="USERS" className="querybtn"></button></Link>
                <Link to="/Layout/Export"><button id="REP" className="querybtn"></button></Link>
                <button id="COMPANY" className="querybtn"></button>
                <Link to="/Layout/RTA"><button id="RT" className="querybtn"></button></Link>
            </div>
        </div>
        <div id="ContAll">
        <div id="infoUser">
            <p id="imaUser"></p>
            <h2>Juan José Fernández Ruiz</h2>
            <ul>
                <li>Perfil</li>
                <li onClick={logOUT}>Out</li>
            </ul>
        </div>
            <Outlet/>
        </div>
        </>
    )
}

export default Layout;