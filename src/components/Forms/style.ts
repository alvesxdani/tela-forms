import styled from "styled-components";

export const FormsContent = styled.div`
background: #2c2c2c;
color: #fff;
max-width: 600px;
padding: 2rem;
font: 0.8rem 'Open Sans', serif;
border-radius: 1rem;

h1 {
    font-family: 'Nunito', sans-serif;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  span {
    display: block;
    font-size: 0.8rem;
    margin-bottom: 2rem;
    text-align: center;
  }

@media (min-width: 400px) {
    width: 80%;
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
    flex: 1;
  }

  input {
    flex: 2;
    padding: 0.8rem;
    background: #eee2;
    color: #fff;
    border-radius: 0.5rem;
    border: none;
    margin-left: 0.3rem;
  }

  input.enviar {
    flex: 0;
    width: 50%;
    margin-top: 1rem;
    cursor: pointer;
    padding: 1rem;
  }

  select {
    flex: 2;
    background: #eee2;
    color: #fff;
    padding: 0.8rem;
    border-radius: 0.5rem;
    border: none;
    margin-left: 0.3rem;
  }

  select option {
    background: #000;
    color: #fff;
  }
`

export const MsgError = styled.div`
display: flex;
justify-content: left;
align-items: center;
margin: 0.5rem;
padding: 0.7rem;
border-radius: 5px;
background: #eee;
color: #000;
`