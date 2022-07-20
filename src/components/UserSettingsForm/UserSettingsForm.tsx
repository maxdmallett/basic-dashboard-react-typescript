import React, { useContext, useState } from 'react'
import { SettingsContext } from '../../contexts/SettingsContext';

function UserSettingsForm() {

    const {userName, userAge, setUserName, setUserAge } = useContext(SettingsContext);
    const [userNameLocal, setUserNameLocal] = useState(userName);
    const [userAgeLocal, setUserAgeLocal] = useState(String(userAge));

    const updateName = (event: { target: HTMLInputElement; }) => {
        const value = event.target.value;
        setUserNameLocal(value);
    }

    const updateAge = (event: { target: HTMLInputElement; }) => {
        const value = event.target.value;
        setUserAgeLocal(value);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setUserName(userNameLocal);
        setUserAge(parseInt(userAgeLocal));
    }

    return (
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder='Your name' name='userName' value={userNameLocal} onChange={updateName}/>
            <input type="number" placeholder='Your age' name='userAge' value={userAgeLocal} onChange={updateAge} />
            <input type="submit"/>
        </form>
    )
}

export default UserSettingsForm;