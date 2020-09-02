import React from 'react';
import './LogIN.css';

export const LogIN = () => {
  return (
    <div className="CenterCenter">
      <form>
        <div className=" Container">
          <label class="block Label" for="ID"
          style={{
            marginTop:"15%"
          }}
          ><b>ID : </b></label>
          <input type="text" name="ID" className="input"
          style={{
          width:"100%",
          marginBottom:"15%",
          }}/>              
          <label class="block Label" for="ID"><b>Passward : </b></label>
          <input type="password" name="ID" className="input" minLength="8"
          style={{
          width:"100%",
          }}/> 
          <input type="submit" 
          style={{
            position:"relaive",
            width:"25%",
            minWidth:"60px",
            justifyItems:"center",
            marginTop:"10%"
            }}/>   
        </div>  
      </form>
    </div>

  );
}