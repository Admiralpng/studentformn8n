import React from 'react';
import { ErrorForm } from '../../styles/components styles/Modal/ErrorFormModal.styled.js';
import { ModalHeader, ModalBody, ModalFooter } from '../../styles/components styles/Modal/Notif.styled.js';
import errorImg from '../../assets/Error.png';
import { LogoIcon } from '../../assets/Icons.jsx';

export const ErrorFormModal = () => {
    return (
        <ErrorForm className="error-modal">
            <ModalHeader>
                <LogoIcon />
            </ModalHeader>
            <ModalBody>
                <h1>Oops!</h1>
                <p><small>THE FORM IS EITHER INCOMPLETE OR A MISTAKE WAS DETECTED. PLEASE TRY AGAIN!</small></p>
            </ModalBody>
            <ModalFooter>
                <img src={errorImg} alt="Error form submission" />
            </ModalFooter>
        </ErrorForm>
    );
};
