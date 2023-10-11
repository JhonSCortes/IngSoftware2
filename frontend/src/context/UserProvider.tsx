import { UserContext } from './UserContext';
import { useState } from 'react';

interface Props {
    children: React.ReactNode
}

export const UserProvider = ({ children }: Props) => {
    const [session, setSession] = useState(localStorage.getItem('sessionToken') || '');

    return (
        <UserContext.Provider value={{ session, setSession }}>
            {children}
        </UserContext.Provider>
    )
}
