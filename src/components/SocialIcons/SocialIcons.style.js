import styled from "styled-components";
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

  color: ${({ theme }) => theme.colors.primary};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.primary_Hover};
  }

  @media ${devices.tablet} {
    font-size: 3.5rem;
    text-align: center;
  }
`;
