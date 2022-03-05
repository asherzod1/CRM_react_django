import React, {useState} from 'react';
import '../../style/navbar.scss'
import {RiNotificationLine} from 'react-icons/ri'
function Navbar(props) {
    const [toggle, setTogle] = useState(false)
    const switch_toggle = () =>{
        setTogle(!toggle)
    }
    return (
        <div className="navbarr">
            <div className="navbarr__left">
                <h3 className="navbarr__left__title">Zako iT academy</h3>
            </div>
            <div className="navbarr__right">
                <div className="navbarr__right__left">
                    <input className="navbarr__input" type="text"/>
                </div>
                <div className="navbarr__right__right">
                    <div className="open_for_desktop" style={{marginRight:'20px'}}>
                        <p>Open for Desktop</p>
                    </div>
                    <div style={{marginRight:'23px'}}>
                        <label className="switch" >
                            <input  type={toggle ? "checkbox": ''} checked onClick={()=>{switch_toggle()}}/>
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <a href="#" className="notification">
                        <div className="notification-badge"></div>
                        <RiNotificationLine />
                    </a>
                    <a href="#" className="user-photo">
                        <img src="weatherforec.jpg" alt=""/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;