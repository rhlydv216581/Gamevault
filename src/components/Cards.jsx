import { useContext, useEffect, useState } from 'react';
import {gameapi} from '../Context/Apigame';
import { Star } from 'lucide-react';
import "./Cards.scss"
import { Heart } from 'lucide-react';
import { HeartOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const nextpagenotify = toast.success('Successfully Move Nextpage')
const notify = (message) =>
  toast.success(message, {
    style: {
      background: "#000",
      border: "1px solid #ADD8E6",
      padding: "16px",
      color: "#ADD8E6",
    },
    iconTheme: {
      primary: "#ADD8E6",
      secondary: "#000",
    },
  });
const Cards = () => {
  const navigate = useNavigate();
  const [like , setlike] = useState( JSON.parse(localStorage.getItem("likedGames")) || {})
console.log(console.log(localStorage));

  // const [totalike , settotalike]=useState([])
  const {apidatastore,nextpage} = useContext(gameapi)
  // console.log("ye cards data hai ",card);
//   const fav = Object.entries(like).filter(
//   ([id, isLiked]) => isLiked === true
// );

useEffect(() => {
  localStorage.setItem("likedGames", JSON.stringify(like));
}, [like]);
// Object se Favourite IDs nikalna tho 2 Object.entries() — Object ko array mein badlo 3 filter() — Sirf liked games rakho 4 map() — Sirf IDs nikalo
// console.log("ye favouries hai ",fav);
// useEffect(() => {
//   localStorage.setItem("likedGames", JSON.stringify(like));
// }, [like]);
// localStorage.setItem("likedGames", JSON.stringify(fav));
console.log(localStorage);

  return (
    <div className="Cards">
      
      {
        apidatastore.map((item)=>(
          <div className="card" key={item.id}  >
     <span key={item.id}  onClick={() => {
    const isLiked = !!like[item.id];

    setlike((prev) => ({
      ...prev,
      [item.id]: !prev[item.id],
    }));

    if (!isLiked) {
      notify("Added to your favpage");
    } else {
      notify("Removed from your favpage");
    }
  }} >

      {like[item.id] ? <Heart color="red" fill='red'  /> : <HeartOff  className="heart-off" />}
   
    </span>

            <img src={item.background_image} alt=" Loading" />
          <div className="top">

            <h1>{item.
name
}</h1> 
</div>
<div className="bottom">
<h4> <Star /> {item.rating
}</h4>

{/* <h2> DATE:{item.
updated
}</h2>  */}
<h3>You can play in these device </h3>
<h3>
{item.parent_platforms.map((x)=>(
  // console.log(x),
  
  x.platform.name
)).join(" , ")}
 </h3>
</div>
          <button onClick={() => navigate(`/Store/Detail/${item.id}`)}>
            view detail
          </button>
          </div>
        ))
      }
      <button className='nextpage' onClick={() => {
        nextpagenotify();
  nextpage();
}} >
        nextpage
      </button>
      {/* <button onClick={()=>(card)} >
        card button
      </button> */}
    </div>
  )
}

export default Cards
