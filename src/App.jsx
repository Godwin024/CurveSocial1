import './App.css'
import Login from './Components/Login/Login'
import Postpage from './Components/Postpage/Postpage'
import Upload from './Components/Uploading/Upload'
import Wallscreen from './Components/Wallscreen/wallscreen'
import { HashRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <HashRouter>
      <Routes>
        {/* <Route path='/' element = {<Wallscreen/>}/> */}
        <Route path='/' element = {<Login/>}/>
        {/* <Route path='/Upload' element = {<Upload/>}/> */}
        <Route path='/Postpage' element = {<Postpage/>}/>
        
        
        
        </Routes>
      
      
      
      </HashRouter>
  
  
  )
}

export default App
