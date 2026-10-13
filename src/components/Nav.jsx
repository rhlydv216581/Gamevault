import { NavLink } from "react-router-dom";
import { TextAlignJustify , X ,Search } from "lucide-react";
import "./Nav.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
  // useState
  const [isSearchOpen , setisSearchOpen ] = useState (false)
   const [isOpen ,setIsOpen]= useState(false)
    console.log("isOpen:", isOpen);
  return (
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
{isSearchOpen ? (
  <input type="text" placeholder="Search..." />
  
) : (
  <FaSearch className="search"  onClick={() => setisSearchOpen(!isSearchOpen)} />
)}
    </div>
      <div className={`link ${isOpen ? "show" : ""}`}>
        <NavLink to="/Fav"    >Favorite</NavLink>
        <NavLink to="/Store">Store</NavLink>
        <NavLink to="/Library">Library</NavLink>
      </div>
      {/* <TextAlignJustify className="menu-icon" onClick={() => {
  setIsOpen(!isOpen);
}
  

      } /> */}
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
  );
};

export default Nav;