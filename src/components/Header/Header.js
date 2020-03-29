import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import './Header.css';
const Header = () => {
    let history = useHistory();
    const go = (active_tab,url) => {
        setActive(active_tab);
        history.push(url);
    }
    const [active,setActive] = useState('home');
    return (
        <ul>
            <li>
                <span className={active === 'home' ? 'active':null}  onClick={()=>go('home','/')}>Home</span>
            </li>
            <li><span className={active === 'country' ? 'active':null}  onClick={()=>go('country','country')}>Country</span></li>
            <li><span className={active === 'Timeline' ? 'active':null} onClick={()=>go('Timeline','/timeline')}>Timeline</span></li>
            <li><span >About</span></li>
            </ul>
    )
};


export default Header;