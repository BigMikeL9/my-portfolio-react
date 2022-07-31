import styled, { css } from "styled-components/macro";

export const ControlS = styled.div`
  position: relative;
  overflow: hidden;
`;

export const LabelS = styled.label``;

export const TextAreaS = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 16px;
  padding: 20px;
  min-height: 150px;
  resize: none;
  position: relative;
  background-color: transparent;
  letter-spacing: 0.1em;

  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid currentColor;
  caret-color: currentColor;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    -webkit-text-fill-color: ${({ theme }) => theme.colors.primary};
    -webkit-box-shadow: 0 0 0px 1000px transparent inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:focus {
    outline: none;
    color: #08fdd8;
  }

  ${({ isValid }) =>
    isValid === false &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
    `}
`;
