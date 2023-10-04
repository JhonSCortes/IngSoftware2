import axios from 'axios';
import { loginPayload, registerPayload } from '../interfaces/utils';

const BaseBackendURI = import.meta.env.VITE_BASE_API_URI;

const sendRegisterForm = async (payload: registerPayload) => {
    try {
        const res = await axios.post(BaseBackendURI + '/auth/register', {
            email: payload.email,
            password: payload.password,
            username: payload.name
        });
        return res.data;
    } catch (_) {
        return null;
    }
}

const sendLoginForm = async (payload: loginPayload): Promise<string | null> => {
    try {
        const res = await axios.post(BaseBackendURI + '/auth/login', {
            email: payload.email,
            password: payload.password
        });
        return res.data.authentication.sessionToken;
    } catch (_) {
        return null;
    }
}

export { sendRegisterForm, sendLoginForm };