import {Route, Routes} from 'react-router-dom'
import  Gamevault from '../Page/Gamevault'
import  Fav from '../Page/Fav'
import  Library from '../Page/Library'
import  Store from '../Page/Storesss'
const Mainroute = () => {
  return (
    <Routes>
        <Route path='/' element = {<Gamevault/>} />  
        <Route path='/Fav' element = {<Fav/>}/>
        <Route path='/Store' element = { <Store/>}/>
        <Route path='/Library' element = {<Library/>} />  
    </Routes>
  )
}

export default Mainroute
