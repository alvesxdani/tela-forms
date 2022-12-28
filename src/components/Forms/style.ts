import styled from "styled-components";

export const FormsContent = styled.div`
background: #2c2c2c;
color: #fff;
width: 500px;
padding: 2rem;
font: 0.8rem 'Open Sans', serif;
border-radius: 1rem;
  h1 {
    font-family: 'Nunito', sans-serif;
    text-align: center;
    margin-bottom: 2rem;
  }
`

export const DivForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 0.8rem;
  /* border: 1px solid #eee; */

  label {
    font-weight: bold;
  }

  input {
    flex: 1;
    margin-left: 0.8rem;
    padding: 0.8rem;
    background: #eee2;
    color: #fff;
    border-radius: 0.5rem;
    border: none;
  }

  input.enviar {
    flex: 0;
    width: 50%;
    margin-top: 1rem;
    cursor: pointer;
    padding: 1rem;
  }
`