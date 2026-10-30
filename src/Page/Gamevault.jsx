import  { useContext, useEffect, useState } from 'react'
import "./Gamevalut.scss"

import {gameapi } from '../Context/Apigame';
import Button from '../components/Button';
import Boxgamevault from '../components/Boxgamevault'
import { ShoppingCartMinus } from 'lucide-react';
import { ScrollText } from 'lucide-react';
import { Gamepad2 } from 'lucide-react';
import { HeartMinus } from 'lucide-react';
import Media from '../components/Media';
import { MonitorSmartphone } from 'lucide-react';
import Axios from '../utility/Axios'
// import { Bookmark } from 'lucide-react';
import { UserGroup } from 'lucide-react';
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
const Gamevault = () => {
  const navigate = useNavigate()
  const [desprection, setdesprection] = useState([])
  // export const id = randomGamedisply?.id;
  const { apidatastore } = useContext(gameapi);
  // const randomGamedisply =  gamedata[4];
  console.log("ye gamevalut",apidatastore);
  
  const randomGamedisply =  apidatastore[Math.floor(Math.random() * apidatastore.length)] ;
  console.log("ye randomdata",randomGamedisply);
  
// console.log("https://api.rawg.io/api/games/12020/movies?key=ec81cd95eecd4503b6a93d6001c82694");

// console.log("game data",gamedata);
   console.log("game data hai ", randomGamedisply);
    console.log("game data hai ki id  ", randomGamedisply?.id);
    console.log("yeplatform",randomGamedisply?.platforms)
    console.log("yeplatform",randomGamedisply?.platforms.map((item)=> (
      item.platform.name
  )));

   const getdespection = async () => {

    try {
      console.log("Full game data:", randomGamedisply);
console.log("Game ID:", randomGamedisply?.id);
      const response = await Axios.get(`games/${randomGamedisply?.id}`
        );
        console.log("ye id derahai ",randomGamedisply?.id);
        // const responsevideo =  await Axios.get(`games/${randomGamedisply?.id}/movies`
        // );
       setdesprection(response.data.description_raw)
      // console.log("ye video",responsevideo)
      
    } catch (error) {
       console.log(error);
    }

  }

  
  const platforminformation = randomGamedisply?.platforms.map((item)=> (
    item.platform.name
  )).join(" , ");;
  const genresinformation =randomGamedisply?.genres.map((item)=>(
    item.name
  )).join(" , ");
  console.log("generes",randomGamedisply?.genres.map((item)=>(
    item.name
  )));

  // const derpection = response.data.description_raw
  // console.log("numberplayer",randomGamedisply?.playtime);
const media = randomGamedisply?.short_screenshots.map((item)=>(item.image))
console.log(media);

  const playingtime = randomGamedisply?.playtime; 
  // console.log("generes",genresinformation);
  useEffect(() => {
      // if (!randomGamedisply?.id) return; 
    getdespection()
  
  }, [])
  console.log("ye video ka hai data ----------------------",getdespection);
  
  return (
    <>
    <div className="gamevalut"  
    style={{
    backgroundImage: `url(${randomGamedisply?.background_image})`,
  }}
   >
  <div className="information">

    <div className="informationwriting">

{/*   
<video
  controls
  width="640"
  poster="https://media.rawg.io/media/games/..."
>
  <source
    src="https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie480.mp4"
    type="video/mp4"
  />
  Your browser does not support video playback.
</video> */}

     <h1>{randomGamedisply?.name }</h1>   
    
      {/* <img src={randomGamedisply?.background_image} alt="" /> */}
      {/* short_screenshots */}
      <p>Rating: {randomGamedisply?.rating}</p>
      <p> {randomGamedisply?.updated}</p>
      
    </div>
    <div className="informationbutton">
     <div className="informationbutton">
  <Button
    title="Shop"
      onClick={() => navigate("/Fav")}
    icone={<ShoppingCartMinus />}
    style={{ backgroundColor: "#48cae4" }}
  />

  <Button
      onClick={() => navigate("/Library")}
    title="Explore favourites"
    icone={<HeartMinus />}
  />
</div>
      </div>
  </div>
    </div>
    
    <div className="mibble" >
    <div className="aboutgame">
<div className="top">
 <h1>  <ScrollText className='title'  /> {randomGamedisply?.name} </h1>
</div>
 <h4>{desprection}</h4>
    
    </div>
  <div className="playerreview">

<div className="review-card">
  <div className="top">
 <h2>Player Reviews  </h2>
<h1>{randomGamedisply?.rating}</h1>  
 
  </div>
  {randomGamedisply?.ratings?.map((item) => (
    <div className="rating-row" key={item.id}>
      <span className="rating-title">{item.title}</span>

      <div className="bar">
        <div
          className="bar-fill"
          style={{ width: `${item.percent}%` }}
        />
      </div>

      <span className="rating-percent">
        {item.percent.toFixed(1)}%
      </span>

      <span className="rating-count">
        {item.count.toLocaleString()}
      </span>
    </div>
  ))}
</div>
  </div>
  </div>
  
   <div className="moreinformation">
  <Boxgamevault className="box" Heading={"Platform"} title={<MonitorSmartphone/>} platform = {platforminformation} />
  <Boxgamevault className="box" Heading={"Generes"} title={<Gamepad2 />} genres = {genresinformation} />
  <Boxgamevault className="box" Heading={"playingtime"} title={<UserGroup/>}  playtime = {playingtime+" hour"} />
  {/* <Boxgamevault className="box" Heading={"Tag"} title={<Bookmark/>}  playtime = {tags} /> */}
  
  {/* {randomGamedisply?.platforms?.map((item)=>(
    // <div key={item.platform.id}>
   <span> {item.platform.name} </span>
  // </div>
  )) 

  
   </div> */} 
   </div>
   <div className="photo">
  <h1>Story Screenshots</h1>
  <Media photo={media}  /> 
</div>
   <div className="footer">

   <Footer  />
   </div>
    </>
)}

export default Gamevault
