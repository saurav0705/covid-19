import React, { useState } from 'react';
import './Header.css';
const Header = () => {
    const [active,setActive] = useState('home');
    return (
        <ul>
            <li><span className={active === 'home' ? 'active':null}  onClick={()=>setActive('home')}>Home</span></li>
            <li><span className={active === 'country' ? 'active':null}  onClick={()=>setActive('country')}>Country</span></li>
            <li><span className={active === 'Timeline' ? 'active':null} onClick={()=>setActive('Timeline')}>Timeline</span></li>
            <li><span >About</span></li>
            </ul>
    )
};


export default Header;