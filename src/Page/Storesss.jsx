import "./Store.scss"
import Cards from '../components/Cards'

const STORE = () => {
  const information = [ "I don’t rage quit; I just take strategic breaks to let my controller cool down.","I came for the loot, but I stayed for the epic fails","I play like a pro… on the loading screen!","If my skills were a game mode, they’d be ‘Casual’—with extra respawns!"]
 const randomquote = information[Math.floor(Math.random() * information.length)];
  return (
    <div className='storegame'>
    <div className="top">
    <div className="topinfor">
      <h1>EXPLORE THE METAVERSE</h1>
      <h3>Discover your next obssesion from our curted databased of the world's most legendary title</h3> 
    </div>
    <div className="header">
   <h1>{randomquote}</h1>
   {console.log(randomquote)}
   
    {/* { information.map((item,index ) =>(
     <h1 key={index} >  { item} </h1>
      ))}
      */}
    </div>
    </div>
    <div className="card">
      <Cards  />
    </div>
    
   <button>
    nextpage
   </button>
    </div>
  )
}

export default STORE
