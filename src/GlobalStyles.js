import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
  
  :root{
    --primary:#592859;
    --primaryLight:#703E70;
    --secondary:#1566E0;
    --light:#FFFF;
    --darkdark:#000000;
    --darkShadow:#333;
    --vermelhao: #F13;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    
    box-sizing: border-box;

    font-family: sans-serif;

  }`;