import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';
import grain from "../assets/grain.jpg";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
    ${(props) => props.theme.media.mobile} {
      font-size: 0.8rem;
    }
  }

  body {
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: "Goldman", sans-serif;
  }

  span {
    font-size: 1.6rem;
    letter-spacing: -0.5px;
  }

  p {
      font-size: 1.2rem;
      font-weight: 800;
  }

`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 75px 28px 56px;
  gap: 40px;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.border};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  box-shadow: 0px -8px 10px rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 10;
  bottom: 0vh;
  ${(props) => props.theme.media.mobile} {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 14px;
      padding: 28px 20px 28px 38px;
  }

  p{
    font-size: 0.85rem;
    ${(props) => props.theme.media.mobile} {
      font-size: 1.2rem;
      font-weight: 700;
    }
  }

  section{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 28px;
    color: ${(props) => props.theme.colors.text};
    
    &>p{
      cursor: pointer;
      margin: 0px -12px;
    }

    &>p:hover{
      text-decoration: underline;
    }
    &>a{
      margin-top: 4px;
      border-left: 2px solid ${(props) => props.theme.colors.text};
      padding-left: 6px;
    }
    &>div{
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 8px;
      &>svg{
        height: 26px;
        width: auto;
      ,
        &:hover{
          transition: ease 200ms;
          padding: 0;
        }  
        }
      }
    }
  
  svg{
    height: 32px;
    width: auto;
    cursor: pointer;
    padding: 2px;
    margin-left: 8px;
  }
  
  a{
    text-decoration: none;
    color: inherit;
  }
`
