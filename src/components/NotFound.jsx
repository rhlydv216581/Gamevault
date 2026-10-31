
import React from 'react'
import "./NotFound.scss"
const NotFound = () => {
  return (
    
    <div className="not-found" >
      {/* <img
        src="https://i.pinimg.com/1200x/27/e5/2e/27e52e4257d3f45567f883cb7da60661.jpg"
        alt="Page not found"
      /> */}

      <div className="not-found-content">
        {/* <h1>404</h1> */}
        <h1>Oops! Page not found</h1>
        <p>The page you're looking for doesn't exist.</p>

        <a href="/">Go Home</a>
      </div>
    </div>
  )
}

export default NotFound