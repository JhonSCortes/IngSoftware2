const saveSessionToken = (sessionToken: string) => {
    localStorage.setItem('sessionToken', sessionToken);
}

export {saveSessionToken};