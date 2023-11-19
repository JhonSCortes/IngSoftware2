// This function saves the sessionToken in the localStorage.
const saveSessionToken = (sessionToken: string) => {
    localStorage.setItem('sessionToken', sessionToken);
}

export { saveSessionToken };