import React, { useContext } from 'react'
import {apidatastore} from '../Context/Apigame'
const gameapidata =  useContext(apidatastore)


const Gamevault = () => {
  // console.log(gameapidata);
  
  return (
    <div className='gamevault'>
      <div className="image">

      </div>

    </div>
  )
}

export default Gamevault
