import React from 'react'
import "./Youtubevideo.scss"
const Youtubevideo = ({titile}) => {
  return (
    <div className='youtube'>
      
  <iframe
    width="100%"
    height="500"
    src={`https://www.youtube.com/embed/${titile}?autoplay=1&mute=1`}
    title="Game Trailer"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  />
    </div>
  )
}

export default Youtubevideo
