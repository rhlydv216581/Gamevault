
import React, { useEffect, useState } from 'react'
import "./Sidebarpricebox.scss"

const Sidebarpricebox = () => {

    
    const [storeproduc, setstoreproduc] = useState(
        JSON.parse(localStorage.getItem('savedGame')) ||[]
    );

    
    // Calculate total price
    const amount = storeproduc.reduce((total, item) => {
        return total + Number(item.price);
    }, 0) ;

    return (
        <>
            <div className="box">

                {storeproduc.map((item) => (
                    <div className="price" key={item.id}>

                        <img src={item.thumbnail} alt={item.name} />

                        <h3 className="game-name">{item.name}</h3>

                        <div className="game-price">
                            <span>Price:</span>
                            <strong>{item.price}</strong>
                        </div>

                        <p>Game ID: {item.id}</p>

                    </div>
                ))}

            </div>

            <button className='totalamount' onClick={() => {
                console.log(amount);
            }}>
              <h1>
                Total Amount you spent $: <span> {amount}
                  </span>
                </h1>  
            </button>
        </>
    );
}

export default Sidebarpricebox;
