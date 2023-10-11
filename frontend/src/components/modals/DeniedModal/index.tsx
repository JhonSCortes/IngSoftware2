import './DeniedModal.css';
import { useNavigate } from 'react-router-dom';

interface Props {
    errorText: string
}

const DeniedModal: React.FC<Props> = (props) => {
    const navigateTo = useNavigate();

    function moveToLogin() {
        navigateTo('/auth');
    }

    return (
        <>
            <div className="card">
                <div className="header">
                    <div className="image">
                        <svg
                            aria-hidden="true"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                    <div className="content">
                        <span className="title">{props.errorText}</span>
                        <p className="message">
                            The route you are trying to access is protected, and the corresponding user was not found. Please verify your credentials and try again.
                        </p>
                    </div>
                    <div className="actions">
                        <button className="cancel" type="button" onClick={() => moveToLogin()}>
                            To Login
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default DeniedModal;