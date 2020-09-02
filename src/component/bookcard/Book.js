import React from 'react'
import './Book.css'
export default function Book({title,src}) {
    return (
              
        <div className="card-container">
            <img alt="" height="100px" src={src} 
            style={{
                
            }}/>
            <div className="title-container">
                <p className="prop" style={{
                    fontSize:"17px",
                    fontFamily:"cursive",
                    // fontStyle:"",
                    textAlign:"center"
                }}>{title}</p>
            </div>
            
            
            
        </div>
        
    )
}
