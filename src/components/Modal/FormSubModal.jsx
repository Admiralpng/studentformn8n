import React from 'react';
import { SubmittedForm } from '../../styles/components styles/Modal/FormSubModal.styled.js';
import { ModalHeader, ModalBody, ModalFooter } from '../../styles/components styles/Modal/Notif.styled.js';
import { LogoIcon } from '../../assets/Icons.jsx';

export const FormSubModal = () => {
    return (
        <SubmittedForm className="submitted-modal">
            <ModalHeader>
                <h1>Form Submitted!</h1>
            </ModalHeader>
            <ModalBody>
                <p>You have completed the student feedback form.<br></br>
                    Thank you for your time and effort in providing valuable feedback.<br></br>
                    Your input is greatly appreciated and will
                    help us improve our courses and services.
                </p>
            </ModalBody>
            <br></br>
            <ModalFooter>
                <button type="submit">Receive a Copy</button>
            </ModalFooter>
        </SubmittedForm>
    );
};
