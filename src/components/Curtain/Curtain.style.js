import styled, { keyframes, css } from "styled-components/macro";

const slideDownUp = keyframes`
    0% {
        transform: translateY(-100%)
    }

    40%, 60%{
        transform: translateY(0);
    }

    100% {
        transform: translateY(-100%);
    }
`;

const slideLeftRight = keyframes`
    0% {
        transform: translateX(-100%)
    }

    40%, 60%{
        transform: translateX(0);
    }

    100% {
        transform: translateX(100%);
    }
`;

const slideUp = keyframes`
    0%, 90%{
        transform: translateY(0);
    }

    100% {
        transform: translateY(-100%);
    }
`;

const fadeOut = keyframes`
     0%, 90%{
      opacity: 1;
    }

    100% {
      opacity: 0;
    }
`;

const typewriter = keyframes`
   to {
    left: 100%;
  }
`;

const blinkCaret = keyframes`
    to {
    background: transparent;
  }
`;

const fadeInUp = keyframes`
    to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const CurtainS = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #020b16;

  display: flex;
  align-items: center;
  justify-content: center;
  animation-fill-mode: backwards;
  backface-visibility: hidden;
  pointer-events: none;

  /* transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1); */

  ${(props) =>
    props.main &&
    css`
      animation: ${slideUp} 7s cubic-bezier(0.65, 0, 0.35, 1) forwards;
      z-index: 99999;
    `}

  ${(props) =>
    props.page &&
    css`
      animation: ${slideLeftRight} 2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
      z-index: 9999;
    `}
`;

export const CurtainMainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: max(6vh, 8vh);
`;

const typeWriterText_Config = {
  bg_color: " #020b16",
  typewriterSpeed: "4s",
  typewriterCharacters: "26",
};

export const TypeWriterText = styled.h1`
  font-family: "Source Code Pro", monospace;
  letter-spacing: 0.1em;
  font-size: clamp(25px, 5vw, 60px);

  position: relative;
  line-height: 1;
  width: max-content;

  &::before,
  &:after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    bottom: 0;
    left: 0;
    height: 150%;
  }

  &::before {
    background: ${typeWriterText_Config.bg_color};

    animation: ${typewriter} ${typeWriterText_Config.typewriterSpeed}
      steps(${typeWriterText_Config.typewriterCharacters}) 1s forwards;
  }

  &:after {
    width: 0.05em;

    background: ${({ theme }) => theme.colors.secondary};

    animation: ${typewriter} ${typeWriterText_Config.typewriterSpeed}
        steps(${typeWriterText_Config.typewriterCharacters}) 1s forwards,
      ${blinkCaret} 750ms steps(${typeWriterText_Config.typewriterCharacters})
        infinite;
  }
`;
