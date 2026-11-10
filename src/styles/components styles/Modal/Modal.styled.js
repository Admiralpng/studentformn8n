import styled from "styled-components";

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 25px 20px 40px;
    margin: auto;
    max-width: 480px;
    background: #f6f1eb;
    border-radius: 10px;
    z-index: 1;

    img {
        max-width: 180px;
        height: auto;
    }

    ${(props) => props.theme.media.mobile} {
        max-width: 300px;
        max-height: 75vh;
    }
    
    &:hover{
        outline: 2px solid #000;
        transition: ease 200ms;
    }
`

export const ModalBackdrop = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,0.5);
`