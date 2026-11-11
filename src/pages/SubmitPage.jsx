import React from 'react'
import { useLocation } from 'react-router-dom'
import { SubPageContainer } from '../styles/submitpage.styled'
import { FormSubModal } from '../components/Modal/FormSubModal'

export const SubmitPage = () => {
    const { state } = useLocation()
    const submission = state?.submission

    return (
        <SubPageContainer>
            <FormSubModal submission={submission} />
        </SubPageContainer>
    )
}
