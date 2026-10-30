import "./Fav.scss"
import { GamepadDirectional } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import axios from '../utility/Axios';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Fav = () => {
  const navigate = useNavigate()
  const [favgamecard] = useState(
    JSON.parse(localStorage.getItem('likedGames')) || {}
  );
   const numberofcard = Object.entries(favgamecard)
      .filter(([key, value]) => value === true)
      .map(([key]) => key);
const fetchGames = async () => {
      try {
        const responses = await Promise.all(
          numberofcard.map((id) => axios.get(`games/${id}`))
        );

        const games = responses.map((response) => response.data);

        console.log('Game Data:', games);
        setfavgame(games);
      } catch (error) {
        console.log('API Error:', error);
      }
    };
  const [favgame, setfavgame] = useState([]);

  useEffect(() => {
    fetchGames();
  }, [favgamecard]);

  return (
    <div className="fav-games">
    {favgame.map((game) => (
      <div
        className="game-card"
        key={game.id}
        style={{
          backgroundImage: `url(${game.background_image})`,
        }}
      >
        <div className="game-card-content">
          <h2>{game.name}</h2>
        
          <div className="platform-list">
            < GamepadDirectional/> 
            {game.parent_platforms
              ?.map((item) => item.platform.name)
              .join(' , ') || 'Platform information unavailable'}
          </div>

          <button
            className="view-detail"
            onClick={() => navigate(`/Store/Detail/${game.id}`)}
          >
            view detail
          </button>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Fav;
