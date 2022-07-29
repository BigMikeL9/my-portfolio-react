import styled, { css } from "styled-components/macro";

export const ControlS = styled.div`
  position: relative;
  overflow: hidden;

  ${({ isValid }) =>
    isValid === false
      ? css`
          label:after {
            background-color: red;
            transition: unset;
            transform: translateX(0);
          }
        `
      : css`
          label:after {
            background-color: #08fdd8;
          }
        `}
`;

export const LabelS = styled.label`
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    transition: all 0.3s ease-out;
    transform: translateX(-100%);
  }
`;

export const InputS = styled.input`
  caret-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  border: 0;
  background-color: #2b2b2b;
  color: ${({ theme }) => theme.colors.primary};

  font-size: 16px;
  padding: 15px 20px;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border: 0px solid green;
    -webkit-text-fill-color: #8d8d8d;
    -webkit-box-shadow: 0 0 0px 1000px #2b2b2b inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  &:focus {
    outline: none;

    & + label:after {
      transform: translateX(0);
    }
  }
`;
