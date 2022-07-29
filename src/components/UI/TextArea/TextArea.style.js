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
    transform: translateX(-100%);
  }
`;

export const TextAreaS = styled.textarea`
  width: 100%;
  height: 100%;
  /* border: 1px solid ${({ theme }) => theme.colors.primary}; */
  border: none;
  background: #2b2b2b;
  font-size: 16px;
  color: #8d8d8d;
  padding: 20px;
  min-height: 150px;
  resize: none;
  position: relative;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    border: 0px solid green;
    -webkit-text-fill-color: #8d8d8d;
    -webkit-box-shadow: 0 0 0px 1000px #2b2b2b inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  /* ---- change '::after' bg-color onSubmit input in invalid ---- */
  ${({ isValid }) =>
    isValid === false &&
    css`
      & + label:after {
        background-color: red;
        transform: translateX(0);
      }
    `}

  &:focus {
    outline: none;

    & + label:after {
      transform: translateX(0);
    }
  }
`;
