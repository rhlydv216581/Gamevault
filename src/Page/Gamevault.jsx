import  { useContext } from 'react'
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

// import { Bookmark } from 'lucide-react';
import { UserGroup } from 'lucide-react';
import Footer from '../components/Footer'
const Gamevault = () => {
  let gamedata = useContext(gameapi)
  
const randomGamedisply = gamedata[Math.floor(Math.random() * gamedata.length)];
  // console.log("game data",gamedata);
   console.log("game data", randomGamedisply);
    console.log("yeplatform",randomGamedisply?.platforms)
  console.log("yeplatform",randomGamedisply?.platforms.map((item)=> (
    item.platform.name
  )));
  const platforminformation = randomGamedisply?.platforms.map((item)=> (
    item.platform.name
  )).join(" , ");;
  const genresinformation =randomGamedisply?.genres.map((item)=>(
    item.name
  )).join(" , ");
  console.log("generes",randomGamedisply?.genres.map((item)=>(
    item.name
  )));

  // console.log("numberplayer",randomGamedisply?.playtime);
const media = randomGamedisply?.short_screenshots.map((item)=>(item.image))
console.log(media);

  const playingtime = randomGamedisply?.playtime; 
  // console.log("generes",genresinformation);
  
  return (
    <>
    <div className="gamevalut"  
    style={{
    backgroundImage: `url(${randomGamedisply?.background_image})`,
  }}
   >
  <div className="information">

    <div className="informationwriting">

     <h1>{randomGamedisply?.name }</h1>   
    
      {/* <img src={randomGamedisply?.background_image} alt="" /> */}
      {/* short_screenshots */}
      <p>Rating: {randomGamedisply?.rating}</p>
      <p> {randomGamedisply?.updated}</p>
      
    </div>
    <div className="informationbutton">
       <Button title="Shop" icone = { <ShoppingCartMinus />}  style={{ backgroundColor: "#48cae4" }} />
       <Button title="Add to favoures"  icone = { <HeartMinus />}  />
      </div>
  </div>
    </div>
    <div className="mibble">
    <div className="aboutgame">
<div className="top">
 <h1>  <ScrollText className='title'  /> About VideoGame </h1>
</div>
 <h4>Video games are a popular form of entertainment. They are fun to play and come in many types, such as racing games, adventure games, puzzle games, and action games. Popular games include Minecraft, Roblox, Free Fire, and GTA. Video games can help improve creativity, thinking skills, and problem-solving abilities.</h4>
<h4>
Many people enjoy playing video games with their friends and family. Some games also help players learn new things and work as a team. However, we should play games for a limited time and take regular breaks. We should also balance gaming with studies, exercise, and other outdoor activities.</h4>
    
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
