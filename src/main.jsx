import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import Apigame from './Context/Apigame.jsx'
// import moduleName from './Context'
createRoot(document.getElementById('root')).render(
<BrowserRouter>
<Apigame>

    <App />
</Apigame>
</BrowserRouter>

)
