import { createContext } from 'react';

export type sessionContext = {
    session: string,
    setSession: (c: string) => void
}

export const UserContext = createContext<sessionContext>({ session: '', setSession: () => { } });
