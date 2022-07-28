import styled from "styled-components/macro";

import Button from "../UI/Button/Button";

export const FormContainer = styled.div`
  max-width: 50%;

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    /* grid-template-rows: ; */
  }
`;

export const ControlGroup = styled.div`
  position: relative;
  overflow: hidden;

  /* .invalid {
    label {
      &:focus {
        &:after {
          background-color: red;
          transform: translateX(0);
        }
      }

      &:after {
        background-color: red;
        transform: translateX(0);
      }
    }
  } */
`;

export const SubmitButton = styled(Button)``;
