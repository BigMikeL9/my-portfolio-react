import styled, { keyframes } from "styled-components/macro";

export const rotate = keyframes`
  0% { 
    transform: rotate(0deg); 
  }

  100% { 
    transform: rotate(360deg); 
  }
`;

export const SpinnerContainerS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const SpinnerS = styled.span`
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  border: 3px solid ${({ theme }) => theme.colors.secondary}; /* Light grey */
  border-top: 3px solid ${({ theme }) => theme.colors.primary}; /* Black */
  border-radius: 50%;
  animation: ${rotate} 1.4s linear infinite;
`;
