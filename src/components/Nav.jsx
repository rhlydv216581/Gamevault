import { NavLink, useNavigate } from "react-router-dom";
import Sidebarpricebox from '../components/Sidebarpricebox'
import { TextAlignJustify , X ,Search } from "lucide-react";
import "./Nav.scss";
import { FaSearch } from "react-icons/fa";
import {  useEffect, useRef, useState } from "react";
import Shopping from '../components/Shopping'
// import moduleName from '../Page/Detail';
// import axios from "axios";
import axios from '../utility/Axios';

const Nav = () => {
   const navigate = useNavigate();


  const [searchquerydatastore , setsearchquerydatastore] = useState([])
  const [searchquery, setsearchquery] = useState("") 
  const timer = useRef(null);
function changehandle(e) {
  const value = e.target.value;

  setsearchquery(value);

  clearTimeout(timer.current);

  timer.current = setTimeout(() => {
     if (value.trim() !== "") {
      searchapi(value);
       setsearchquery("");
    }
  }, 2000);

}

let searchapi = async (search) => {
  try {
    if (!search.trim()) return;//khai hai tho function ruk jayaga kyu ki return likha hi tho ruk jata hai 
    console.log("Search value:", searchquery);
    const response = await axios.get(`/games?search=${search}`)
    console.log(response.data.results);
   setsearchquerydatastore(response.data.results);
   setTimeout(() => {
    setsearchquery("");
   }, 3000);
  } catch (error) {
    console.log(error);
    
  }
}

  
  // useState
  const [ sidebar,setsidebar] = useState(false)
  const [isSearchOpen , setisSearchOpen ] = useState (false)
   const [isOpen ,setIsOpen]= useState(false)
    console.log("isOpen:", isOpen);
  return (
    <>
    <div className="Nav">
      <div className="logo">
        <NavLink to="/" className="logo-link">
          <img
            src="https://static.vecteezy.com/system/resources/previews/059/317/178/large_2x/a-robed-figure-holding-two-swords-stands-with-fiery-background-png.png"
            alt="Character"
          />
          <span>GAMEVAULT</span>
        </NavLink>
      </div>

    <div className="searhbar">
      {console.log("ye updated data ",searchquery)}
{isSearchOpen ? ( 
<>
  <input type="text" placeholder="Search..." onChange={changehandle} value={searchquery}  
  />
    {
        <div className="search-results">
          {searchquerydatastore.map((game) => (
    <div
      onClick={() => {
        setsearchquerydatastore([]);
// Games ki list ko empty array [] bana deta hai. Ab .map() ke paas dikhane ke liye games nahi hain, isliye dropdown ke cards gayab ho jaate hain.
        setsearchquery("");
        navigate(`/Store/Detail/${game.id}`);
      }}
      className="search-card"
      key={game.id}
    >
              <img
                src={game.background_image}
                alt={game.name}
              />
              <div>
                <h4>{game.name}</h4>
                <p>Rating: {game.rating}</p>
              </div>
            </div>
          ))}
        </div>
      }
    </>
) : (
  <FaSearch className="search"  onClick={() => setisSearchOpen(!isSearchOpen)} />
)}

    </div>
      <div className={`link ${isOpen ? "show" : ""}`}>
        <NavLink to="/Fav"    >Favorite</NavLink>
        <NavLink to="/Store">Store</NavLink>
        <NavLink to="/Library">Library</NavLink>
        
      </div>
      <div className="shopping" onClick={() => (setsidebar(!(sidebar))) 
       } >
        
  {console.log("yesidebar ka hai ",sidebar)
  }
      <  Shopping/>
      
      </div>
      <div className={`sidebar ${sidebar ? "active" : ""}`}>
  <button
    className="close-btn"
    onClick={() => setsidebar(false)}
  >
    
    <X />
  </button>
 
   <Sidebarpricebox/>
  
  
 
  


</div>
     {isOpen ? (
       <X
    className="menu-icon"
    onClick={() => setIsOpen(!isOpen)}
  />
 
) : (
   <TextAlignJustify
    className="menu-icon"
    onClick={() => setIsOpen(!isOpen)}
  />
)}
    </div>
    
    </>
  );
};

export default Nav;