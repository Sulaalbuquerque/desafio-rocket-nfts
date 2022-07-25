import { createGlobalStyle } from 'styled-components'    

const GlobalStyle = createGlobalStyle`
  html,
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    
    /* ::-webkit-scrollbar {
      width: 6px;
      background-color: ${({ theme }) => theme.black};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.blue};
    } */
  }
` 
export default GlobalStyle;