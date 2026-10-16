import  { useContext } from 'react'
import "./Gamevalut.scss"
import {gameapi } from '../Context/Apigame';
import Button from '../components/Button'
const Gamevault = () => {
  let gamedata = useContext(gameapi)
  
const randomGamedisply = gamedata[Math.floor(Math.random() * gamedata.length)];
  // console.log("game data",gamedata);
   console.log("game data", randomGamedisply);
  return (
    <div className="gamevalut"  style={{
    backgroundImage: `url(${randomGamedisply?.background_image})`,
  }} >
  <div className="information">

    <div className="informationwriting">

     <h1>{randomGamedisply?.name }</h1>   
      {/* <img src={randomGamedisply?.background_image} alt="" /> */}
      {/* short_screenshots */}
      <p>Rating: {randomGamedisply?.rating}</p>
      <p>{randomGamedisply?.updated}</p>
      
    </div>
    <div className="informationbutton">
       <Button title="Shop"  style={{ backgroundColor: "#48cae4" }} />
       <Button title="Add to favoures"   />
      </div>
  </div>
    </div>
)}

export default Gamevault
