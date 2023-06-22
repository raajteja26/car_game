import React, { useState } from 'react';
import "./dashboard.css"
import "../css/bootstrap.min.css";
import wheel from "./images/wheel.png"
import body from "./images/body.png"
import flag from "./images/flag.png"
import driver from "./images/driver.png"
import passenger from "./images/passenger.png"
import outpassenger from "./images/outpassenger.png"
import Button from 'react-bootstrap/Button';
function Dashboard() {
  const [inCar,setInCar] = React.useState(false)
  const [stop,setStop] = React.useState(false)
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const randomColor = getRandomColor();
  const randomColor1 = getRandomColor();
  const randomColor2 = getRandomColor();
  const randomColor3 = getRandomColor();
  return (
    <div>
      <h1 className="fade-in" style={{ color: randomColor }}>Raajteja</h1>
      <h1 className="-in" style={{ color: randomColor1 }}>Car Service</h1>
      <h1 className="scale" style={{ color: randomColor2 }}>9515371838</h1>
      <div>
      {stop ? <div><button type="button" class={inCar ? "btn btn-warning" : "btn btn-primary"} onClick={()=>{setInCar(!inCar)}}>{inCar ? "Get Out" : "Get In"}</button> <button type="button" class="btn btn-success" onClick={()=>{setStop(!stop)}}>Start</button></div> : <button type="button" class="btn btn-danger" onClick={()=>{setStop(!stop)}}>Stop</button>}
      </div>
      <br/>
      <br/>
      <br/>
      <div className={stop ? "container" : "container slide-in"} style={{position:"relative"}}>
      <img style={{position:"absolute",width:"8%",left:"543px",bottom:"103px"}} src={driver} alt="driver" />
      {inCar === false ? "":<img style={{position:"absolute",width:"6.3%",left:"474px",bottom:"102px"}} src={passenger} alt="passenger" />}
      <img  className='' src={body} alt="body" style={{width:"40%"}}/>
      <img style={{position:"absolute",width:"9%",left:"384px",bottom:"-4px"}} className={stop ? "" : "rotate"} src={wheel} alt="wheel" />
      <img style={{position:"absolute",width:"9%",right:"385px",bottom:"-4px"}} className={stop ? "" : "rotate"} src={wheel} alt="wheel" />
      <img style={{position:"absolute",width:"13%",left:"257px",bottom:"90px"}} classNam src={flag} alt="flag" />
      </div>
      <div style={{backgroundColor:"black",marginTop:"-3px",position:"relative"}}><span style={{color:"black"}}>road</span>
      {inCar ? "" : <img style={{position:"absolute",width:"11%",right:"100px",bottom:"6px"}} src={outpassenger} alt="outpasenger"/>}
      </div>
    </div>
  );
}     

export default Dashboard;
