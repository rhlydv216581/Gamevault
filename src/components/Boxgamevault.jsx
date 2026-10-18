import React from 'react'
import "./Boxgamevault.scss"
const Boxgamevault = ({title,platform,genres ,Heading, playtime
}) => {

 console.log("box ",platform);
 
    return (
    <div className='box'>
      {title}
      <h1> { Heading}</h1>
      <span>{platform}{genres}{ playtime }</span>
      
    </div>
  )
}

export default Boxgamevault
