import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components/macro";
import Curtain from "./Curtain";

const slideUp = keyframes`
    from {
        transform: translate(0)
    }

    to {
        transform: translateY(-100%);
    }
`;

const slideLeft = keyframes`
    from {
        transform: translate(0)
    }

    to {
        transform: translateX(-100%);
    }
`;

const slideRight = keyframes`
    from {
        transform: translate(0)
    }

    to {
        transform: translateX(100%);
    }
`;

export const CurtainMain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #020b16;
  z-index: 99999;

  display: flex;
  align-items: center;
  justify-content: center;
  animation-fill-mode: backwards;
  backface-visibility: hidden;

  /* transition: transform 0.8s cubic-bezier(0.65, 0, 0.35, 1); */
  animation: ${slideUp} 0.8s cubic-bezier(0.65, 0, 0.35, 1) 1s forwards;
`;

// export const CurtainMain = () => {
//   return (
//     <>
//       {ReactDOM.createPortal(
//         <CurtainMainS />,
//         document.getElementById("curtain-root")
//       )}
//     </>
//   );
// };

export const CurtainPage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: #020b16;
  z-index: 99999;

  display: flex;
  align-items: center;
  justify-content: center;
  animation-fill-mode: backwards;
  backface-visibility: hidden;

  animation: ${slideLeft} 0.8s cubic-bezier(0.65, 0, 0.35, 1) 1s forwards;
`;
