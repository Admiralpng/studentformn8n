import styled from 'styled-components';
import grain from "../assets/grain.jpg";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100vw;
  padding: 45px 18px;
  row-gap: 25px;

  & > form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 25px;
    width: 100%;
  }

  .field-inputs {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: 100%;
    max-width: 480px;
    margin-top: 12px;

    & input, textarea {
      border: 1px solid ${(props) => props.theme.colors.default};
      border-radius: 5px;
      font-size: 1.05rem;
      padding: 8px 12px;
      color: ${(props) => props.theme.colors.text};
      outline: 2px solid transparent;
      margin-bottom: 12px;

      &:focus, &:active, &:focus-visible {
        outline: none;
        border-color: ${(props) => props.theme.colors.secondary};
      }
      
      &:hover{
        outline: 2px solid #000;
        transition: ease 200ms;
      }
    }

    .select-field {
      position: relative;

      details {
        position: relative;
      }

      summary {
        list-style: none;
        border: 1px solid ${(props) => props.theme.colors.default};
        border-radius: 5px;
        background-color: white;
        font-size: 1.05rem;
        padding: 8px 12px;
        color: #5a5a5a;
        cursor: pointer;

        &::-webkit-details-marker {
          display: none;
        }

        &:hover{
          outline: 2px solid #000;
          transition: ease 200ms;
        }

        &:focus {
          outline: none;
          border-color: ${(props) => props.theme.colors.secondary};
        }
      }

      .options {
        position: absolute;
        z-index: 2;
        width: 100%;
        margin: 4px 0 0;
        padding: 0;
        list-style: none;
        border: 1px solid ${(props) => props.theme.colors.default};
        border-radius: 5px;
        overflow: hidden;
        background-color: ${(props) => props.theme.colors.primary};

        li button {
          width: 100%;
          border: none;
          border-radius: 0;
          margin-top: 0;
          padding: 8px 12px;
          font-size: 1.05rem;
          text-align: left;
          background-color: ${(props) => props.theme.colors.primary};
          color: ${(props) => props.theme.colors.text};
          cursor: pointer;
          outline: none;

          &:hover {
            background-color: ${(props) => props.theme.colors.default};
            color: ${(props) => props.theme.colors.text};
            transition: ease 150ms;
          }
        }
      }
    }
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  ,
    button{
      margin-top: 25px;  
      border: 1px solid ${(props) => props.theme.colors.default};
      border-radius: 5px;
      font-size: 1.05rem;
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
  }
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px 20px 30px;
  border-radius: 10px;
  border: 1px solid rgb(98, 95, 102);
  background-color: #3d3d3d;
  background-image: url(${grain});
  background-size: cover;
  background-blend-mode: multiply;
  width: 500px;
  min-height: 200px;
  height: fit-content;
  color: #f6f1eb;

  &:hover {
    outline: 2px solid black;
    transition: ease 200ms;
  }

  form {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    width: 100%;
    max-width: 480px;
    margin-top: 12px;

    & input, textarea {
      border: 1px solid ${(props) => props.theme.colors.default};
      border-radius: 5px;
      font-size: 1.05rem;
      padding: 8px 12px;
      color: ${(props) => props.theme.colors.text};
      outline: 2px solid transparent;
      margin-bottom: 12px;
      ,

      &:focus, &:active &:focus-visible {
        outline: none;
        border-color: ${(props) => props.theme.colors.secondary};
      }
      
      &:hover{
        outline: 2px solid #000;
        transition: ease 200ms;
      }
    }

    .select-field {
      position: relative;
      margin-bottom: 12px;

      details {
        position: relative;
      }

      summary {
        list-style: none;
        border: 1px solid ${(props) => props.theme.colors.default};
        border-radius: 5px;
        background-color: white;
        font-size: 1.05rem;
        padding: 8px 12px;
        color: #5a5a5a;
        cursor: pointer;

        &::-webkit-details-marker {
          display: none;
        }

        &:hover{
          outline: 2px solid #000;
          transition: ease 200ms;
        }

        &:focus {
          outline: none;
          border-color: ${(props) => props.theme.colors.secondary};
        }
      }

      .options {
        position: absolute;
        z-index: 2;
        width: 100%;
        margin: 4px 0 0;
        padding: 0;
        list-style: none;
        border: 1px solid ${(props) => props.theme.colors.default};
        border-radius: 5px;
        overflow: hidden;
        background-color: ${(props) => props.theme.colors.primary};

        li button {
          width: 100%;
          border: none;
          border-radius: 0;
          margin-top: 0;
          padding: 8px 12px;
          font-size: 1.05rem;
          text-align: left;
          background-color: ${(props) => props.theme.colors.primary};
          color: ${(props) => props.theme.colors.text};
          cursor: pointer;
          outline: none;

          &:hover {
            background-color: ${(props) => props.theme.colors.default};
            color: ${(props) => props.theme.colors.text};
            transition: ease 150ms;
          }
        }
      }
    }
  }
`