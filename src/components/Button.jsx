import React from 'react'
import "./Button.scss"
const Button = ({title,style,icone}) => {
  return (
    <div className='button' style={style} >
        {icone}{title}
      
    </div>
  )
}

export default Button
