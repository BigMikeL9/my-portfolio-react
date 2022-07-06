import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import Futura_Reg from "./assets/fonts/Futura-Reg.woff";
import Futura_SemiBold from "./assets/fonts/Futura-SemiBold.woff";
import Futura_Bold from "./assets/fonts/Futura-Bold.woff";

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    

@font-face {
    font-family: "futura_reg";
    src: url(${Futura_Reg}) format("eot"), url(${Futura_Reg}) format("woff")
}

@font-face {
    font-family: "futura_semibold";
    src: url(${Futura_SemiBold}) format("eot"), url(${Futura_SemiBold}) format("woff")
}

@font-face {
    font-family: "futura_bold";
    src: url(${Futura_Bold}) format("eot"), url(${Futura_Bold}) format("woff")
}


*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
  font: inherit;
  vertical-align: baseline;
}

html {
  font-size: 62.5%; 
  -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow-x: hidden;

 
    scroll-behavior: smooth;
    
  

  
  // 'max-width: 1200px'
  @media only screen and (max-width: 75em) {
    font-size: 56%;
    }
  
  @include responsive(tab-land) {
    
  }

  // 'max-width: 900px'
  @media only screen and (max-width: 56.25em) {
    font-size: 50%;
    }
 

  // 'max-width: 600px'
  @media only screen and (max-width: 37.5em) {
    font-size: 46%;
    }


  // 'max-width: 375px'
  @media only screen and (max-width: 23.5em) {
    font-size: 36%;
    }
  

  // 'min-width: 1800px'
  @media only screen and (min-width: 112.5em) {
     
    }
}

body {
  font-family: 'futura_reg','Helvetica Neue','Helvetica','Arial','Avenir','Hiragino Sans', sans-serif;
    font-size: 1.6rem;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
    ${"" /* color: #828c96; */}
    overflow-x: hidden;
  
  
  font-weight: 400;
  line-height: 1.5;

  min-height: 100vh;


  
}

::selection {
  background-color: #c0eda6;
  color: #fff;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

a {
  color: inherit;
  text-decoration: inherit;
  outline: none;

  /* 'a' elements that don't have a class get default styles */
  &:not([class]) {
    text-decoration-skip-ink: auto;
  }
}

ul,
ol {
  list-style: none;
}

img,
picture {
  max-width: 100%;
  display: block;
  image-rendering: -webkit-optimize-contrast;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}






`;
