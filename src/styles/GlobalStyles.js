import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import Futura_Reg from "../assets/fonts/Futura-Reg.woff";
import Futura_SemiBold from "../assets/fonts/Futura-SemiBold.woff";
import Futura_Bold from "../assets/fonts/Futura-Bold.woff";

export const GlobalStyles = createGlobalStyle`
    ${normalize}

    @font-face {
      font-family: "futura_reg";
      src: url(${Futura_Reg}) format("eot"), url(${Futura_Reg}) format("woff");
    }

    @font-face {
      font-family: "futura_semibold";
      src: url(${Futura_SemiBold}) format("eot"),
        url(${Futura_SemiBold}) format("woff");
    }

    @font-face {
      font-family: "futura_bold";
      src: url(${Futura_Bold}) format("eot"), url(${Futura_Bold}) format("woff");
    }

    *,
    *::after,
    *::before {
      padding: 0;
      margin: 0;
      box-sizing: inherit;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }

    html {
      font-size: 62.5%;
      box-sizing: border-box;
      overflow-x: hidden;
      scroll-behavior: smooth;
      
      background-color: ${({ theme }) => theme.backgrounds.body};

      
      // 'max-width: 1200px'
      @media only screen and (max-width: 75em) {
         font-size: 56%; 
      }
      
      
      // 'max-width: 900px'
      @media only screen and (max-width: 56.25em) {
        ${"" /* font-size: 50%; */}
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
      font-family: "futura_reg", "Helvetica Neue", "Helvetica", "Arial", "Avenir",
        "Hiragino Sans", sans-serif;
      font-size: 1.6rem;
      text-size-adjust: 100%;
      overflow-x: hidden;
      font-weight: 400;
      line-height: 1.5; 
      min-height: 100vh;

      color: ${({ theme }) => theme.colors.primary};
      background-color: ${({ theme }) => theme.backgrounds.body};
    }

    ::selection {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primary};
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

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2;
    }

    a {
      &:link,
      &:visited,
      &:active,
      &:focus {
        color: inherit;
        text-decoration: none;
        outline: none;
      }
    }

    p {
      line-height: 2;
      word-wrap: break-word;
      white-space: normal;
    }

    ul,
    ol {
      list-style: none;
    }

    li {
      list-style-type: none;
    }

    img,
    picture {
      max-width: 100%;
      display: block;
      image-rendering: -webkit-optimize-contrast;
      ${"" /* image-rendering: smooth; */}
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
