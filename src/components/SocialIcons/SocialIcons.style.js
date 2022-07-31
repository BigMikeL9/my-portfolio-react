import styled, { css } from "styled-components/macro";
import devices from "../../styles/Devices";

export const IconsContainer = styled.div`
  display: flex;
  gap: 0 3rem;
  margin-right: 6.4rem;

  @media ${devices.tablet} {
    gap: 0 4rem;
    margin-right: 0;
    align-items: center;
    justify-content: center;
  }
`;

export const Icon = styled.a`
  font-size: 2.4rem;
  display: inline-block;
  transition: all 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;

  color: ${({ theme }) => theme.colors.primary};

  margin: ${({ margin }) => (margin ? margin : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};
  margin-top: ${({ mt }) => (mt ? mt : "")};
  top: ${({ top }) => (top ? top : "")};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary_Hover};
  }

  @media ${devices.tablet} {
    font-size: 3.5rem;
    text-align: center;
  }
`;

// export const HoverTitle = styled.span`
//   position: absolute;
//   top: 130%;
//   left: 50%;

//   font-size: 16px;
//   transform: translateX(-50%);
//   letter-spacing: 0.1em;
//   width: max-content;
//   line-height: 1.2;
//   text-align: center;

//   padding: 0.5rem 1rem;
//   color: ${({ theme }) => theme.colors.primary};
//   border: 1px solid ${({ theme }) => theme.colors.primary};
//   background-color: ${({ theme }) => theme.colors.secondary};
// `;
