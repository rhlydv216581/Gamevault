import {  useEffect, useState } from "react"
import "./Libraray.scss"
import axios from '../utility/Axios'
import { useNavigate } from "react-router-dom"
const Library = () => {
 const navigate = useNavigate();
  const [datastore, setdatastore] = useState([])


  const [storeproduc, setstoreproduc] = useState(
          JSON.parse(localStorage.getItem('savedGame')) 
      );
      console.log("yelibrary",storeproduc);
const gamename = storeproduc?.map((item)=>(
 item?.name
));
console.log("gamename",gamename);
 const gamelibradata = async () => {
    
    try {
       const responses = await Promise.all(
      gamename.map((name) =>
        axios.get(`/games?search=${name}`)
      )
    );
    console.log("ffffff",responses.map((item)=> item.data.results[0]));
      setdatastore(responses.map((item)=> item.data.results[0]))
    // const games = responses.map(
    //   (response) => response.data.results[0]
    // );

    // setdatastore(responses.data.results[0]);
    // console.log("yeeeeeyyyyyyeyyey",responses.data.results[0]);
    
    } catch (error) {
      console.log(error);
      
    }
  }
useEffect(() => {
gamelibradata()
  }, [setstoreproduc])

console.log("ye apicalled ka data stor horahaui ",datastore);

      
  return (
//     <div className='libraray'>
//       {datastore.map((item)=>(
// <div className="card" style={{backgroundImage : `URL ${item?.background_image}`}} >
//       <div className="top">
//         <img src={item?.short_screenshots.map((img)=>(img?.image))
// } alt="" />
//         <h1>
//           {item.name}
//         </h1>
//       </div>
// </div>
//       ))}
//     </div>
<div className="libraray">
  {datastore?.length > 0 ? (
    datastore.map((item) => (
      <div
        className="card"
        key={item.id}
        onClick={() => navigate(`/Store/Detail/${item.id}`)}
      >
        <div
          className="hero"
          style={{
            backgroundImage: `url("${item?.background_image}")`
          }}
        >
          <div className="game-info">
            <h1>{item?.name}</h1>
            <p>Scroll right to view more →</p>
          </div>
        </div>

        {item?.short_screenshots?.map((img) => (
          <div className="screenshot" key={img.id}>
            <img src={img.image} alt={item.name} />
          </div>
        ))}
      </div>
    ))
  ) : (
    <div className="empty-library">
      <h2>No Products Available</h2>
      <p>Please buy a product first!</p>
    </div>
  )}
</div>
)
}

export default Library
