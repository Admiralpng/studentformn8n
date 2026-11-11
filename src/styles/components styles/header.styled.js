import styled from 'styled-components'
import vivid from "../../assets/vhalftone-stripe.jpg"

export const HeaderContainer = styled.div`
  display: flex;
  padding: 15px 20px;
  justify-content: space-between;
  align-items: center;
  max-width: 100vw;
  min-height: fit-content;
  background-color: ${(props) => props.theme.colors.border};
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4);

  .dark-icon,
  .light-icon {
    height: 30px;
    width: auto;
    color: ${(props) => props.theme.colors.text};
    fill: ${(props) => props.theme.colors.text};
  }

  .logo{
      width: 62px;
      height: auto;
      margin-bottom: -4px;
      color: ${(props) => props.theme.colors.text};
    }

  .logo * {
    fill: currentColor;
  }
,
  .toggle-button{
    background: none;
    border: none;
    width: fit-content;
    height: fit-content;
    padding: 5px;
    cursor: pointer
  }

  div{
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;

    svg{
      cursor: pointer;
    }
  }

  a{
    text-decoration: none;
    color: inherit;
  }
  
  section{
    position: relative;
    overflow: hidden;
    border-left: 2px solid ${(props) => props.theme.colors.text};
    padding: 8px 20px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;

    .vivid-bg{
      position: absolute;
      z-index: 0;
      top: 0;
      left: 0;
      width: 200%;
      height: 100%;
      padding-left: 20px;
      background-image: url(${vivid});
      background-color: ${(props) => props.theme.colors.border};
      background-repeat: repeat-x;
      background-size: 50% 100%;
      background-blend-mode: multiply;
      opacity: 0.35;
      animation: vivid-scroll 20s linear infinite;
    }
    @keyframes vivid-scroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }

    h1, h2{
      position: relative;
      z-index: 1;
    }

    h1{
      cursor: pointer;
      -webkit-text-stroke: 2px ${(props) => props.theme.colors.tertiary};
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      letter-spacing: 1px;
    }
    h2{
      font-size: 0.85rem;
    }
  }
`