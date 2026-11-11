import React, { useState } from 'react';
import { SubmittedForm } from '../../styles/components styles/Modal/FormSubModal.styled.js';
import { ModalHeader, ModalBody, ModalFooter } from '../../styles/components styles/Modal/Notif.styled.js';
import { requestCopy } from '../../backend/Server';

export const FormSubModal = ({ submission }) => {
    const [status, setStatus] = useState('idle');

    const handleReceiveCopy = async () => {
        if (!submission || status === 'sending' || status === 'sent') return;
        try {
            setStatus('sending');
            await requestCopy(submission);
            setStatus('sent');
        } catch (err) {
            setStatus('error');
        }
    };

    const label = status === 'sending' ? 'Sending...' : status === 'sent' ? 'Copy Sent' : status === 'error' ? 'Retry Send Copy' : 'Receive a Copy';

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
                <button id="copyBtn" type="button" onClick={handleReceiveCopy} disabled={!submission || status === 'sending' || status === 'sent'}>
                    {label}
                </button>
                {!submission && <small>Submission data unavailable. Please submit the form again.</small>}
                {status === 'error' && <small>Could not send copy. Please try again.</small>}
            </ModalFooter>
        </SubmittedForm>
    );
};
