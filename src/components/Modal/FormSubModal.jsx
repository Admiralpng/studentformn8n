import React, { useState } from 'react';
import { SubmittedForm } from '../../styles/components styles/Modal/FormSubModal.styled.js';
import { ModalHeader, ModalBody, ModalFooter } from '../../styles/components styles/Modal/Notif.styled.js';
import { requestCopy } from '../../backend/Server';

export const FormSubModal = ({ submission, copyUrl }) => {
    const [status, setStatus] = useState('idle');
    const canSendCopy = !!(submission?.email && copyUrl);

    const handleReceiveCopy = async () => {
        if (!canSendCopy || status === 'sending' || status === 'sent') return;
        try {
            setStatus('sending');
            await requestCopy(copyUrl, submission);
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
                <button id="copyBtn" type="button" onClick={handleReceiveCopy} disabled={!canSendCopy || status === 'sending' || status === 'sent'}>
                    {label}
                </button>
                {!canSendCopy && <small>Copy unavailable. Please submit the form again.</small>}
                {status === 'error' && <small>Could not send copy. Please try again.</small>}
            </ModalFooter>
        </SubmittedForm>
    );
};
