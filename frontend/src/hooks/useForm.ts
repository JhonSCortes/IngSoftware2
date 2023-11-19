import { useContext } from 'react';
import { sendRegisterForm, sendLoginForm } from '../utils/axios';
import { saveSessionToken } from '../utils/session';
import { UserContext } from '../context/UserContext';
import { loginPayload, registerPayload } from '../interfaces/utils';

// Custom hook to init auth forms
const useForm = (typeForm: string) => {
    const { setSession } = useContext(UserContext);

    const sendForm = async (payload: registerPayload | loginPayload) => {
        if (typeForm === 'register') {
            const requestResult = await sendRegisterForm(payload as registerPayload);
            return requestResult
        } else {
            const requestResult = await sendLoginForm(payload) || '';
            setSession(requestResult);
            saveSessionToken(requestResult);
            return requestResult;
        }
    };

    return sendForm
}

export { useForm };