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

export const SubmitButton = styled(Button)``;
