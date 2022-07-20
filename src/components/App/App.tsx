import React, { useState } from 'react';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import { SidebarData } from '../Sidebar/SidebarData';
import Navbar from '../Navbar/Navbar';
import { SettingsContext, userSettings } from '../../contexts/SettingsContext';
import './App.css';

function App() {

    const [userName, setUserName] = useState(userSettings.userName);
    const [userAge, setUserAge] = useState(userSettings.userAge);

    return (
        <div className="App">

            <SettingsContext.Provider 
                value={{
                    userName: userName,
                    setUserName: setUserName,
                    userAge: userAge,
                    setUserAge: setUserAge
                }}
            >
                <BrowserRouter>
                    <Navbar/>
                    <Routes>
                        {
                            SidebarData.map((item, index) => {
                                return (
                                    <Route path={item.path} element={item.element} key={index}></Route>
                                )
                            })
                        }
                    </Routes>
                </BrowserRouter>
            </SettingsContext.Provider>
        </div>
    );
}

export default App;
