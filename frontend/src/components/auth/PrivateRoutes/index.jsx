import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../context/UserContext';
import ErrorModalComponent from '../../modals/ErrorModal';

const PrivateRoutesComponent = ({children}) => {
    const sessionDispatcher = useContext(UserContext);

    return sessionDispatcher.session? children : <ErrorModalComponent errorText='You are not authorized to enter here.' />
}

export default PrivateRoutesComponent;
