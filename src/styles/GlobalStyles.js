import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import "atropos/css";

import Futura_Reg from "../assets/fonts/Futura-Reg.woff";
import Futura_Medium from "../assets/fonts/Futura-Medium.woff";
import Futura_Bold from "../assets/fonts/Futura-Bold.woff";
import Futura_ExtraBold from "../assets/fonts/Futura-ExtraBold.woff";
import Futura_D from "../assets/fonts/Futura-Dem.woff";

import devices from "./Devices";

export const GlobalStyles = createGlobalStyle`
    ${normalize}  

    @font-face {
      font-family: "futura_reg";
      src: url(${Futura_Reg}) format("eot"), url(${Futura_Reg}) format("woff");
    }
    
    @font-face {
      font-family: "futura_medium";
      src: url(${Futura_Medium}) format("eot"),
        url(${Futura_Medium}) format("woff");
    }

    @font-face {
      font-family: "futura_bold";
      src: url(${Futura_Bold}) format("eot"), url(${Futura_Bold}) format("woff");
    }
    
    @font-face {
      font-family: "futura_extrabold";
      src: url(${Futura_ExtraBold}) format("eot"),
        url(${Futura_ExtraBold}) format("woff");
    }
    
    @font-face {
      font-family: "futura_d";
      src: url(${Futura_D}) format("eot"),
        url(${Futura_D}) format("woff");
    }

    ${
      "" /* ::-webkit-scrollbar {
        display: none;
    } */
    }

    ::selection {
      background-color: ${({ theme }) => theme.colors.secondary};
      color: ${({ theme }) => theme.colors.primary};
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
      text-size-adjust: 100%;
      box-sizing: border-box;
      overflow-x: hidden;
      ${"" /* scroll-behavior: smooth; */}
      
      background-image: ${({ theme }) => theme.backgrounds.body};

      
      // 'max-width: 1200px'
      @media ${devices.laptop} {
         font-size: 56%; 
      }
      
      
      // 'max-width: 900px'
      @media ${devices.tablet} {
        ${"" /* font-size: 50%; */}
      }
    

      // 'max-width: 600px'
      @media ${devices.mobile_L} {
        font-size: 44%; 
      }


      // 'max-width: 375px'
      @media ${devices.mobile_S} {
       font-size: 40%;  
      }
      

      // 'min-width: 1800px'
      @media ${devices.desktop} {
        
      }
    }

    body {
      font-family: "futura_reg", "Helvetica Neue", "Helvetica", "Arial", "Avenir",
        "Hiragino Sans", sans-serif;
      font-size: max(13px, 1.6rem);
      text-size-adjust: 100%;
      overflow-x: hidden;
      font-weight: 400;
      line-height: 1.5; 
      min-height: 100vh;

      color: ${({ theme }) => theme.colors.primary};
      background-image: ${({ theme }) => theme.backgrounds.body};
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
      margin: 0;
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
