import React,{ Component, useState } from "react";



export default function Statebtn() {
  function enableBtn(){
    const btt=document.querySelectorAll('.btns');
    for(var i=0;i<btt.length;i++){
      btt[i].disabled=false;
    }
  }
  const [stateS,setstateS] = useState("");

  function OpenModal(btns){
    setstateS(btns);
    modal()
  }

  function confirm(){
    if(stateS === "ava"){
      close();
      enableBtn()
      document.getElementById("demo").innerHTML="Available";
      document.getElementById("ava").disabled="true";
    }else if(stateS === "unav"){
      close();
      enableBtn()
      document.getElementById("demo").innerHTML="Personal";
      document.getElementById("unav").disabled="true";
    }else if(stateS === "break"){
      close();
      enableBtn()
      document.getElementById("demo").innerHTML="Break";
      document.getElementById("break").disabled="true";
    }else if(stateS === "lunch"){
      close();
      enableBtn()
      document.getElementById("demo").innerHTML="Lunch";
      document.getElementById("lunch").disabled="true";
    }else if(stateS === "meet"){
      close();
      enableBtn()
      document.getElementById("demo").innerHTML="Meeting";
      document.getElementById("meet").disabled="true";
    }else if(stateS === "coach"){
      close();
      enableBtn()
      document.getElementById("demo").innerHTML="Coaching";
      document.getElementById("coach").disabled="true";
    }
    
  }


  function modal(){
    var modal = document.getElementById("Mymodal");
    var body = document.getElementsByTagName("body")[0];
    modal.style.display = "block";
    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
  }
function close() {
  var modal = document.getElementById("Mymodal");
  var body = document.getElementsByTagName("body")[0];
  modal.style.display = "none";
  body.style.position = "inherit";
  body.style.height = "auto";
  body.style.overflow = "visible";
}
  return (
    <>    
      <div id="Mymodal" className="modalcont">
        <div id="modal-cont">
            <div id="contm">
                <h2>¿Desea Cambiar de estado?</h2>
                <button className="conf" id="confirm" onClick={confirm}>Confirmar</button>
                <button className="conf" id="cancel" onClick={close}>cancelar</button>
            </div>
        </div>
    </div>

    <div id="btn1" className="btn">
    
      <button className="btns" id="ava" onClick={() => OpenModal("ava")} ></button>
    </div>
    <div id="btn2" className="btn">
      <button className="btns" id="unav" onClick={() => OpenModal("unav")}></button>
    </div>
    <div id='btn3' className="btn">
      <button className="btns" id="lunch" onClick={() => OpenModal("lunch")}></button>
      <button className="btns" id="break" onClick={() => OpenModal("break")}></button>
      <button className="btns" id="meet" onClick={() => OpenModal("meet")}></button>
      <button className="btns" id="coach" onClick={() => OpenModal("coach")}></button>
    </div>
    </>

  )
}
