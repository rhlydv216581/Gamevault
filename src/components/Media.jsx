import React from 'react'
import "./Media.scss"

const Media = ({ photo }) => {
  console.log("yephpto aaya ", photo);

  return (
    // ✅ Ye parent container scroll karega
    <div className='media-container'>
        {/* <h1>{naaam}</h1> */}
      {
        photo?.map((item, index) => (
          // ✅ Key add karna zaroori hai React me
          <div className='media' key={index}> 
            <img src={item} alt="" />
          </div>
        ))
      }
    </div>
  )
}

export default Media