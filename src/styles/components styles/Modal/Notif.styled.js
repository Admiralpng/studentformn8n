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
    }
`

export const ModalFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
    row-gap: 20px;
    flex-wrap: wrap;

    button{
      margin-top: 25px;  
      border: 1px solid ${(props) => props.theme.colors.default};
      border-radius: 5px;
      font-size: 1.05rem;
      font-weight: 700;
      padding: 8px 12px;
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primary};
      cursor: pointer;

      &:hover{
        transition: ease 200ms;
        outline: 2px solid #000;
        background-color: ${(props) => props.theme.colors.tertiary};
      }
    }
`