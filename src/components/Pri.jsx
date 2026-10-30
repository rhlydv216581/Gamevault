import React from 'react'
import { RiSteamFill , RiShakeHandsLine , RiGamepadLine , RiLinksFill  } from "react-icons/ri";
import "./Pri.scss"
import toast from 'react-hot-toast';
 const notify = () => {
    toast.success("Successfully Save To Your Cart", {
      icon: "🛒",
    });
  };
import { useNavigate } from 'react-router-dom';
const Pri = ({price}) => {
  // const pricestore = localStorage.setItem('Priceno', JSON.stringify(price?.gameID))
   const oldData = JSON.parse(localStorage.getItem("savedGame")) || []; // verwriti ka leya 
     
  const gameData =[ 
    ... oldData, // overwrite ka bachana ka leya apna phale issa stora karna hai aur nayadata laaya ye mai khusa likha hu yooo mjh aarahai chattp tho hisusatnation kar ratha 
    {
      price : price?.cheapest,
      id: price?.gameID,
      thumbnail: price?.thumb,
      name: price?.external
    }
    
  ];
  const navi = useNavigate()
  return (
<div className="extra"  >
  <div className="game-card">
    
    {/* Top Section: Image & Info */}
    <div className="game-card__top">
      <div className="game-card__image-wrapper">
        <img 
          className="game-card__thumb" 
          src={price?.thumb} 
          alt={price?.external} 
        />
      </div>

      <div className="game-card__content">
        <h1 className="game-card__title">{price?.external}</h1>
        {/* Price Box */}
        <div className="game-card__price-box">
          <div className="game-card__price-left">
            <div className="game-card__price-label">
              <span className="icon">$</span> Cheapest Price
            </div>
            <h2 className="game-card__price-value">${price?.cheapest}</h2>
          </div>
          
          <div className="game-card__price-right">
            <button   onClick={() => {
    localStorage.setItem(
      "savedGame",
      JSON.stringify( gameData)
    );
   notify()
  }} className="game-card__btn"  >
             
              
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
             Buy
              {/* <a href="`https://www.cheapshark.com/redirect?dealID=${price?.cheapestDealID}`"> View Deal</a> */}
           
            </button>
            <button  onClick={() => navi("/Store")} className="game-card__btn">Open in Store →</button>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Section: Meta Grid (IDs & Names) */}
    <div className="game-card__meta-grid">
      <div className="meta-item">
        <span className='icone' ><RiGamepadLine /></span>
        <span className="meta-item__label">Game ID</span>
        <span className="meta-item__value">{price?.gameID}</span>
      </div>
      <div className="meta-item">
        <span className='icone'><RiSteamFill /></span>
        <span className="meta-item__label">Steam App ID</span>
        <span className="meta-item__value">{price?.steamAppID}</span>
      </div>
      <div className="meta-item">
        <span className='icone' ><RiShakeHandsLine /></span>
        <span className="meta-item__label">Internal Name</span>
        <span className="meta-item__value" title={price?.internalName}>
          {price?.internalName}
        </span>
      </div>
      <div className="meta-item">
        <span className="meta-item__label">Cheapest Deal ID</span>
        {/* Deal ID lamba hota hai, isliye text-overflow lagaya hai */}
        <span className='icone'><RiLinksFill /></span>
        <span className="meta-item__value" title={price?.cheapestDealID}>
          {price?.cheapestDealID}
        </span>
      </div>
    </div>

  </div>
    </div>
)
}

export default Pri



