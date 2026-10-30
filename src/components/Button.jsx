import React from 'react'
import "./Button.scss"
const Button = ({title,style,icone,onClick }) => {
  return (
    <div className='button' onClick ={onClick } style={style} >
        {icone}{title}
      
    </div>
  )
}

export default Button
