import styled, { keyframes } from "styled-components"

const appear = keyframes`
  from {
    opacity: 0;
    transform: translateY(17vh);
  }
  to {
    opacity: 1;
    transform: translateY(15vh);
  }
`

export const SubmittedForm = styled.div`
    opacity: 0;
    animation: ${appear} 0.45s ease-out forwards;

    h1, h2, p{
    color: ${(props) => props.theme.colors.text};
    font-size: 2rem;
        ${(props) => props.theme.media.mobile} {
            font-weight: 700;
            font-size: 2.8rem;
        }
    }
    p{
        font-size: 1.4rem;
        ${(props) => props.theme.media.mobile} {
            font-weight: 700;
            font-size: 1.75rem;
        }   
    }
    button{
        ${(props) => props.theme.media.mobile} {
            margin: 0;
            width: fit-content;
            height: auto;
            font-size: 1.8rem;
        }
    }
`