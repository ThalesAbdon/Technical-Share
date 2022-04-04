import React from "react"
import image from '../images/FCameraIconWhite.png'
const Header = () =>{
    return(
        <header className='Header'>
       <div>
       <img className='LogoFCameraWhite' src = {image} alt="LogoFCameraWhite"/>
       </div>
	   <div>
		   <button className = "button-Enviar" > Cadastrar </button>
	   </div>
      </header>
    )
}

export default Header