import styled from "styled-components/macro";
import device from "./Devices";

export const H1 = styled.h1`
  font-size: 14rem;
  text-transform: uppercase;
  line-height: 1.2;
  letter-spacing: 0.2em;
  margin-bottom: 1.6rem;
  text-shadow: 0 10px 30px rgb(2 11 22 / 50%);

  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${({ theme }) => theme.colors.primary};

  @media only screen and (${device.mobile_L}) {
    font-size: 9rem;
  }

  @media only screen and (max-width: 25em) {
    font-size: 8rem;
  }
`;

// -- Section title
export const H2 = styled.h2`
  font-size: 8.5rem;
  letter-spacing: 0.2em;
  line-height: 1.2;

  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${({ theme }) => theme.colors.primary};
`;

// -- Lead text
export const H3 = styled.h3`
  font-size: 2.8rem;
  line-height: 1.8;
  letter-spacing: 0.1em;
  text-transform: lowercase;

  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${({ theme }) => theme.colors.primary};

  @media only screen and (max-width: 25em) {
    font-size: 2.2rem;
  }
`;

// -- Project description text
export const H4 = styled.h4`
  font-size: 3.2rem;
  font-weight: bold;
  letter-spacing: 0.1em;

  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const H5 = styled.h5``;

export const P = styled.p`
  font-size: 2.4rem;
  letter-spacing: 2px;
  line-height: 2em;

  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  color: ${({ theme }) => theme.colors.primary};

  span {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
