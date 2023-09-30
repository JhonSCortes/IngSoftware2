import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../../context/UserContext';
import ErrorModalComponent from '../../modals/ErrorModal';
import DeniedModal from '../../modals/deniedModal';

const PrivateRoutesComponent = ({children}) => {
    const sessionDispatcher = useContext(UserContext);

    return sessionDispatcher.session? children : <DeniedModal errorText='You are not authorized to enter here.' />
}

export default PrivateRoutesComponent;
