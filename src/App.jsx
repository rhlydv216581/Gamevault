import Nav from './components/Nav'
import Mainroute from './Routes/Mainroute'
import {Toaster} from 'react-hot-toast'
import "./App.css"
// https://api.rawg.io/api/games?key=ec81cd95eecd4503b6a93d6001c82694&page_size=5
const App = () => {
  return (
    <div className='Main'>
       <Nav/>
       <Toaster/>
  <Mainroute/>
    </div>
  )
}

export default App
