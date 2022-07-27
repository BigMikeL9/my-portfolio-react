import styled from "styled-components/macro";

export const MailToLink = styled.a`
  display: block;
  font-size: 2.4rem;
  transition: all 0.3s;
  letter-spacing: 0.1em;
  width: max-content;
  color: ${({ theme }) => theme.colors.primary};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary_Hover};
  }
`;
