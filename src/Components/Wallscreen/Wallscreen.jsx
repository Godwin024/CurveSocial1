import  React from 'react'
import './Wallscreen.css'
import {useNavigate} from "react-router-dom"






const Wallscreen = () => {

    const Nav = useNavigate();
  return(
    <div className='frame'>
        <div className="wrap">
            <div className="mobile">
                
                
                <h1>CURVE<span>Social</span></h1>

                <p style={{paddingTop: "10px"}}>Connect with a Techie</p>
                <div className='btn'>
                <button onClick={()=>Nav('/Login')}>PROCEED</button>
            </div>
            </div>

            
        </div>
    </div>
  )
}



export default Wallscreen