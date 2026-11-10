import styled from "styled-components"

export const NotifModal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ModalHeader = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    text-align: center;
    ${(props) => props.theme.media.mobile}{
`

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center; 
    color: #202124;
    font-size: 1.2rem;
    padding: 10px;
    margin: 0;
    ${(props) => props.theme.media.mobile}{
        display: flex;
        flex-direction: column;
        justify-content: center;
        row-gap: 8px;
        margin: 14px 0px;
`

export const ModalFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
    row-gap: 20px;
    flex-wrap: wrap;
`