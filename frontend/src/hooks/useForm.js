import { useContext } from 'react';
import { sendRegisterForm, sendLoginForm } from '../utils/axios';
import { saveSessionToken } from '../utils/session';
import { UserContext } from '../context/UserContext';

const useForm = (typeForm) => {
  const {setSession} = useContext(UserContext);

  const returnResult = (res) => {
    if (res) {
      return res
    } else {
      return false
    }
  }

  const sendForm = (payload) => {
    if (typeForm === 'register') {
      const requestResult = sendRegisterForm(payload);
      return returnResult(requestResult.then((res) => returnResult(res)));
    } else if (typeForm === 'login') {
      const requestResult = sendLoginForm(payload);
      return requestResult.then((res) => {
        if (returnResult(res)) {
          saveSessionToken(res);
          setSession(res);
        }
        return returnResult(res);
      });
    }
  };

  return sendForm
}

export {useForm};
