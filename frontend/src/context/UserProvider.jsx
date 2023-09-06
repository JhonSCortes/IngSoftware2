import React, { useEffect, useState } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({children}) => {
    const [session, setSession] = useState(localStorage.getItem('sessionToken'));

    return (
        <UserContext.Provider value={{session, setSession}}>
            { children }
        </UserContext.Provider>
    )
}