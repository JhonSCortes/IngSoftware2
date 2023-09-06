const saveSessionToken = (sessionToken) => {
    localStorage.setItem('sessionToken', sessionToken);
}

export {saveSessionToken};