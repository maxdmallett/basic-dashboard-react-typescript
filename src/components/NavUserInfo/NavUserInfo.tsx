import React, { useContext } from 'react'
import { SettingsContext } from '../../contexts/SettingsContext';
import './NavUserInfo.css';

function NavUserInfo() {

    const { userName, userAge } = useContext(SettingsContext);

    return (
        <div className='nav-user-info'>
            <p>
                <span>{userName}</span> | <span><strong>{userAge}</strong></span>
            </p>
        </div>
    )
}

export default NavUserInfo;