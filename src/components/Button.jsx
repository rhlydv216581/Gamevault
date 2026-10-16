import React from 'react'
import "./Button.scss"
const Button = ({title,style}) => {
  return (
    <div className='button' style={style} >
        {title}
      
    </div>
  )
}

export default Button
