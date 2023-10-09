import { useContext } from 'react';
import { UserContext } from '../../../context/UserContext';
import DeniedModal from '../../modals/DeniedModal';

interface Props {
    children: React.ReactNode
}

const PrivateRoutesComponent = ({ children }: Props) => {
    const sessionDispatcher = useContext(UserContext);

    return sessionDispatcher.session ? children : <DeniedModal errorText='You are not authorized to enter here.' />
}

export default PrivateRoutesComponent;
