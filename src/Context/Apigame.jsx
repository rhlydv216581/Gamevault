import { createContext,  useEffect,  useState } from "react"
// import axios from 'axios';
export const gameapi =  createContext()
import axios from '../utility/Axios'
const Apigame = ({children}) => {

  const getgame = async () => {
    try {
      const request = await axios.get("&page_size=5");
      setapidatastore(request.data.results)


    } catch (error) {
      console.log(error);
      
    }
  } 
 
  
useEffect(() => {
getgame()
 
}, [])



console.log(getgame);

  
const [apidatastore, setapidatastore] = useState([])
  
  console.log(apidatastore);
  
return (
   
  
    <gameapi.Provider value={apidatastore} >
      {children}
      </gameapi.Provider>
    
  )
}

export default Apigame
