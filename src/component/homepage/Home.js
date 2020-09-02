import React from 'react';
import './Home.css';
export const Home=()=> {
  return(
    <div>
      <div className="Logo" /* logo */
        style={{ 
        paddingTop:"7vh",
        display:"grid",
        placeItems:"center",
        }}>
        <img alt="logo" src="../logo.png" height="200px"/>
      </div>
      <div style={{   //notification area "container"
        paddingTop:"7vh",
        display:"grid",
        placeItems:"center",
        }}>
        <div style={{  //notification area
          border:"solid 2px black",
          backgroundColor: "white",// "rgba(94,105,99,0.2)",
          height:"60vh",
          width:"50vw",
          minWidth:"300px",
          minHeight:"400px",
          marginBottom:"7vh",
          }}>
          <div style={{        //notification header
            borderRadius:"10px",
            right:"1vw",
            bottom:"15px",
            margin:"0px",
            alignContent:"center",
            position:"relative",
            height:"40px",
            width:"55%",
            maxWidth:"161px",
            padding:"3px",
            opacity:"0.97",
            border:"solid 1.5px black",
            backgroundColor:"lightblue"
            }}>
            <h3 style={{
              margin:"0px",
              color:"red",
              position:"sticky",
              height:"0px"
              }}>
              Notification
            </h3>
          </div>
          <div  
            style={{  /*small container*/
            position:"relative",
            left:"3.5%",
            backgroundColor:"rgba(94,105,99,0.2)",
            height:"85%",
            width:"93%",
            // minWidth:"250px",
            // minHeight:"340px",
            marginBottom:"2vh",
            }}>
          </div>
        </div>
      </div>
    </div>
  )
}