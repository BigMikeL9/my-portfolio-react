import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
    ${normalize}


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
  box-sizing: border-box;
  overflow-x: hidden;

  /* Set core root defaults */
  &:focus-within {
    scroll-behavior: smooth;
    
  }

  
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
  font-family: "Raleway", sans-serif;
  font-size: 1.6rem;
  
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
