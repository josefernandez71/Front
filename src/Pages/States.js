import React ,{useCallback, useState} from 'react';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import Statebtn from '../Component/statebtn';
import { useNavigate } from 'react-router-dom';
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "../Component/AnimatedProgressProvider";
import ChangingProgressProvider from "../Component/ChangingProgressProvier";
import '../styles/states.scss'

export default function States() {
  const btt=document.querySelectorAll('.btns');

  const percentage = 66;
  const Navigate = useNavigate();
  const logOUT = useCallback(() => Navigate('/',{replace:true}),[Navigate]);
  return (
    
    <div id="contall">
      <div id="PerfilUsers">
        <div id="infoUserS">
          <p id="imaUserS"></p>
          <h2>Juan Jose Fernández Ruiz</h2>
          <p id='textCustom'>Hola Mundo Hola MundoHola Mundo</p>
          <p id='SolvIcon'></p>
        </div>
        <div id='OptionsBTN'>
          <div id='BTNS-Option'>
            <button id='PerfilU'></button>
            <button id='Options'></button>
            <button id='Out' onClick={logOUT}></button>
          </div>  
        </div>
      </div>

        <div id="PanelState">
          <div id="state">
          
            <h1 id="demo" >Log Out</h1>
            <div id="crono">       
              <ChangingProgressProvider values={["01:01","00:02","00:03","00:04","00:05"]}>
                {percentage => (
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}`}
                  styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: 'butt',
                    textSize: '100%',
                    pathTransitionDuration: 1,
                    pathColor: `rgba(62, 152, 199, ${percentage / 60})`,
                    textColor: '#f88',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                  })}/>
                )}
              </ChangingProgressProvider>
            </div>
          </div>

          <div id='selectorState'>
            <Statebtn/>
          </div>
        </div>
        
    </div>
  )
}

