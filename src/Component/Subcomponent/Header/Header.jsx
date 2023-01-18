import React from 'react'
import './Header.css';
import Logo from '../../../Assets/Images/Logo/Logo1-removebg-preview.png'
import NestedModal from '../Modal/Modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import PersistentDrawerLeft from '../Drawer/Drawer'

const Header = () => {
    return (
        <div className='Main-Container'>
            <div className='Main-Header-Continer'>

                <div className='Logo-div'>

                    <img src={Logo} alt="img" />

                </div>

                <div className='LSS-div'>

                    {/* <NestedModal /> */}



                    <button className='Login-btn'>Log In</button>
                    <button className="Sign-btn">Sign Up</button>

                    <i class="fa-solid fa-magnifying-glass"></i>

                    <i class="fa-solid fa-grip-lines"></i>

                    {/* <PersistentDrawerLeft /> */}

                </div>

            </div>

            


        </div>
    )
}

export default Header