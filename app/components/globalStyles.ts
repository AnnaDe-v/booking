// import 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap';
// import 'material-icons/iconfont/material-icons.css'

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
  background: ${({theme}) => theme.body};
  color: ${({theme}) => theme.text};
  font-family: 'OpenSans', sans-serif;
  transition: all 0.50s linear;
}

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
    background-color: transparent;
  }

  input, button {
    border: none;
    outline: none;
  }

  .themeSwitcher {
    color: #ffd400;
  }  
`

