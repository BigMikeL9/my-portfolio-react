import styled, { css } from "styled-components/macro";

import devices from "../../styles/Devices";

import Button from "../UI/Button/Button";

export const FormContainer = styled.div`
  position: relative;
  max-width: 50%;
  margin-top: 6rem;

  @media ${devices.laptop_L} {
    max-width: 70%;
  }

  @media ${devices.tablet} {
    max-width: unset;
  }

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;

    @media ${devices.mobile_M} {
      grid-template-columns: 1fr;
    }

    //-- Position Input & text-area fields
    & > div {
      &:nth-child(3) {
        grid-column: 1 / -1;
      }

      &:nth-child(4) {
        grid-column: 1 / -1;
      }
    }
  }
`;

export const ErrorMessage = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  color: ${({ theme }) => theme.colors.secondary};
  letter-spacing: 0.1em;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-out;

  ${({ isValid }) =>
    isValid === false &&
    css`
      top: -25px;
      opacity: 1;
      visibility: visible;
    `}
`;

export const SubmitButton = styled(Button)`
  grid-column: 2 / -1;
  justify-self: flex-end;
  margin-top: 1rem;
  position: relative;
  font-size: 1.8rem;
  max-height: 4.2rem;
  min-width: 64px;
  max-width: max-content;
  display: inline-block;

  border: none;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.secondary};
  line-height: 1;
  font-weight: bold;
  padding: 1.4rem 2.8rem;
  border-radius: 50px;
  transition: 0.3s;
  letter-spacing: 0.1em;
  cursor: pointer;

  margin-top: ${({ mt }) => (mt ? mt : "")};
  margin-bottom: ${({ mb }) => (mb ? mb : "")};

  @media ${devices.mobile_M} {
    grid-column: unset;
  }

  &:hover,
  &:focus {
    outline: none;
    transform: translate3d(0, -5%, 0);
    background-color: ${({ theme }) => theme.colors.secondary_Hover};
  }
`;
