import { GamepadDirectional } from 'lucide-react';
import { Tag } from 'lucide-react';
import { Globe, MessageCircle } from "lucide-react";
import { CalendarRange } from 'lucide-react';
import Youtubevideo from '../components/Youtubevideo';
import { Trophy } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { useContext, useEffect, useState } from "react";
import Axios from "../utility/Axios";
import { useParams } from "react-router-dom";
import { Star } from 'lucide-react';
import Footer from '../components/Footer'
import Pri from '../components/Pri'
import "./Detail.scss"
import {Detailinformation} from '../Context/Apigame'
import Detailbox from '../components/Detailbox'
import axios from 'axios';
const Detail = () => {
  
 const {gamedetail, detailpage} = useContext(Detailinformation)
  // const [gamedetail, setgamedetail] = useState([]);
  const { name } = useParams();
  console.log("name",name);
  const [price , setprice] = useState([])
 const [videos, setVideos] = useState([]);

 console.log("yeeeee",price);
 
 
//  console.log("getpriceka hai",getpricegame);
 
 const getyoutubevideo = async (gameName) => {
  if (!gameName) return;

  const options = {
    method: "GET",
    url: "https://youtube138.p.rapidapi.com/search/",
    params: {
      q: `${gameName} official trailer`,
      page_size: 1,
      hl: "en",
      gl: "US",
    },
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_YOUTUBE_API_KEY,
      "x-rapidapi-host": "youtube138.p.rapidapi.com",
    },
  };

  try {
    const response = await Axios.request(options);
    // response.data?.contents ue log mai dekhna ek sath 19 video aaya ok tho ye path use kiay 
     const id = response.data?.contents?.[0]?.video?.videoId;
    setVideos(id)
  
  } catch (error) {
    console.log("API error:", error.response?.data || error.message);
  }
};
//  console.log("ye video ",getyoutubevideo);
 
  
//  useEffect(() => {
//     const detailpage = async () => {
//       try {
//         const response = await Axios.get(`games/${name}`);
//         setgamedetail(response.data);
//         console.log("resposnsedata ye game ka detail jho param sa lerahau mai ok ",response.data);
//         // ye waieted karna ka leya tab api aaajya gamedetail ka tab ye chala 
//         // await getyoutubevideo(response.data.name_original);
//          console.log("youtube ki videoid");
         
//       } catch (error) {
//         console.log("API Error:", error);
//       }
//     };

//     detailpage();
    
//   }, [name]);
  
// console.log(gamedetail);
const getpricegame = async ()=>{
  try {
    const response = await axios.get(`https://www.cheapshark.com/api/1.0/games?title=${gamedetail?.name}`)
    
    console.log("ye tara price ka hai ",response.data);
    
    setprice(response.data[0]);
    
  } catch (error) {
    console.log(error);
    
  }
 }
 
 useEffect(() => {

    getpricegame(gamedetail.name);
   getyoutubevideo(gamedetail.name);
}, [gamedetail?.name]);
useEffect(() => {

 detailpage({name});
getyoutubevideo()
// console.log();

}, [name])
  return (
<div className="detailpage">
      <div className="page-layout" style={{backgroundImage : `URL(${gamedetail?.background_image
})` }}>     
 
 
 <div className="smallimage">
  <div className="game-top">
    <img
      className="cover-image"
      src={gamedetail?.background_image_additional}
      alt={gamedetail?.name}
    />

    <div className="information">
      <h1>{gamedetail?.name}</h1>

      <p className="release">
        {gamedetail?.publishers?.map((item) => item.name).join(", ")}
        {" · "}
        {gamedetail?.released}
      </p>

      <div className="ratings">
        <h2>
          <Star />
          {gamedetail?.rating}
        </h2>

        <h2 className="metacritic">
          {gamedetail?.metacritic ?? "N/A"}
          <span>Metacritic</span>
        </h2>
      </div>

      <div className="genres">
        {gamedetail?.genres?.map((item) => (
          <span key={item.id}>{item.name}</span>
        ))}
      </div>
    </div>
    
  </div>
        
  {/* <div className="extra-information">
    
<div className="developers">
  {gamedetail?.developers?.map((item) => (
    <div className="developer-item" key={item.id}>
      <img
        src={item.image_background}
        alt={item.name}
      />
      <span>{item.name}</span>
      <p>{gamedetail?.esrb_rating?.name}</p>
    </div>
  ))}
</div>
  </div> */}
</div>


      </div>
     <div className="price">
      <Pri price={price}  />
     </div>
      <div className="gameachiplay">
        <Detailbox icone={< GamepadDirectional/>} titile={gamedetail?.playtime+" hour"} />
        <Detailbox icone={<Trophy/>} titile={gamedetail?.suggestions_count+" Achievement"
} />
<Detailbox icone={<UsersRound/>} titile={gamedetail?.
added+" Added"}/>
       
      </div>
      <div className="about">
        <h1 style={{padding : `0.7rem  1.5rem`,color : `#87CEEB`  }} >About</h1>
       <p>
         {gamedetail?.description_raw?.slice(0,500)}
        </p>
      </div>
      <div className="developer">
        <h1>Developer & Publisher</h1>
        <div className="extra-information">
    
<div className="developers">
  {gamedetail?.developers?.map((item) => (
    <div className="developer-item" key={item.id}>
      <img
        src={item.image_background}
        alt={item.name}
      />
      <span>{item.name}</span>
      <p>{gamedetail?.esrb_rating?.name}</p>
    </div>
  ))}
</div>
  </div>
      </div>
     <div className="video">
  <Youtubevideo  titile={videos}  />
     </div>
          <div className="section">
            <h2>Details</h2>
            <div className="details-table">
              <div className="row"><span><CalendarRange/> Release Date</span><span>{gamedetail?.released}</span></div>
              <div className="row"><span>< Trophy/> Achievements</span><span>{gamedetail?.achievements_count || 0}</span></div>
              <div className="row"><span><UsersRound/> Players Added</span><span>{gamedetail?.added}</span></div>
              <div className="row"><span> <GamepadDirectional />Average Playtime</span><span>{gamedetail?.playtime} hours</span></div>
              <div className="row"><span> <Tag/> Game Tags</span>
                <div className="tags">
                  {gamedetail?.tags?.slice(0,3).map(tag => <span key={tag?.id} className="tag">{tag?.name}</span>)}
                </div>
              </div>
            </div>
    </div>
  
<div className="game-links">
  
    <a
      href={gamedetail?.website}
      target="_blank"
      rel="noopener noreferrer"
      className="game-link"
    >
      <Globe />
      Official Website
    </a>


  <a
    href={gamedetail?.reddit_url}
    target="_blank"
    rel="noopener noreferrer"
    className="game-link"
  >
    <MessageCircle />
    Reddit Community
  </a>
</div>
<div className="footer">
  <Footer/>
</div>
    </div>
  );
};

export default Detail;
