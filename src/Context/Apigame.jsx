import { createContext,  useEffect,  useState } from "react"

export const gameapi =  createContext()

export const Detailinformation =  createContext()
import axios from '../utility/Axios'
const Apigame = ({children}) => {
  
  const getgame = async () => {
    try {
      // const nextPageNum = page + 1;
      const request = await axios.get("games",{
        params: {
          // page : nextPageNum,
           page_size: 12,
        }
        
      });
      // setpage(nextPageNum);
     console.log("ye request jho mai abhi likha hu ",request);
     
      
      setapidatastore(request.data.results)
    } catch (error) {
      console.log(error);
      
    }
  } 
  const [page, setPage] = useState(1);

const nextpage = async () => {
  try {
    const nextPageNum = page + 1;
    const response = await axios.get("games", {
      params: {
        page: nextPageNum,
        page_size: 12,
      },
    });
    setPage(nextPageNum); // state update
    console.log("Fetched page:", nextPageNum, response.data);
    setapidatastore(response.data.results);
  } catch (error) {
    console.log(error);
  }
};
const [gamedetail, setgamedetail] = useState([]);
 const detailpage = async ({name}) => {
  console.log("yeee aara hai ",name);
  
      try {
        const response = await axios.get(`games/${name}`);
        console.log("API ke liye game ID:", name);
        setgamedetail(response.data);
      } catch (error) {
        console.log("API Error:", error);
      }
    }
  




  useEffect(() => {
  getgame();
  detailpage();
}, []);
const [apidatastore, setapidatastore] = useState([]);
  // const [ videodata , setvideodata ] = useState([]);
  console.log(apidatastore);
 
return (
    
    <Detailinformation.Provider value={{gamedetail, detailpage}}>
        <gameapi.Provider value={{apidatastore,nextpage}} >
      
        {children}
      
        </gameapi.Provider>
   </Detailinformation.Provider>
      
  )
}

export default Apigame
