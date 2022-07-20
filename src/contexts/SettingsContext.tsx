import { createContext } from "react";

interface UserSettings {
    userName: string;
    userAge: number;
    setUserName: React.Dispatch<React.SetStateAction<string>>;
    setUserAge: React.Dispatch<React.SetStateAction<number>>;
}

export const userSettings: UserSettings = {
    userName: 'Max Mallett',
    userAge: 32,
    setUserName: () => {},
    setUserAge: () => {}
};

export const SettingsContext = createContext(userSettings);