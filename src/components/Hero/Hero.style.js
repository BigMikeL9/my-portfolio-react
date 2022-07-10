import styled from "styled-components/macro";
import device from "../../styles/Devices";

export const HeroSection = styled.section`
  height: 100vh;
  width: 100%;

  grid-column: centered-content-start / centered-content-end;
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const HeroTitleContainer = styled.div`
  position: relative;
  z-index: 300;

  @media only screen and (${device.tablet_Land}) {
    margin-bottom: 10rem;
  }

  @media only screen and (${device.tablet_Port}) {
    align-self: flex-end;
  }

  @media only screen and (max-width: 25em) {
    margin-bottom: 4rem;
  }
`;

export const HeroImageContainer = styled.div`
  position: relative;
  top: 0;
  left: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: auto;
  transition: all 0.3s;

  height: 1385px;
  width: 1385px;

  @media only screen and (max-width: 87.5em) {
    top: -10%;
    left: -5%;
  }

  @media only screen and (${device.tablet_Port}) {
    left: -50rem;
  }

  @media only screen and (${device.mobile_L}) {
    top: -50%;
    left: -42%;
    transform: scale(0.4);
  }

  @media only screen and (max-width: 25em) {
    top: -65%;
    transform: scale(0.35);
  }

  @media only screen and (max-width: 22em) {
    top: -75%;
    transform: scale(0.35);
  }

  @media only screen and (max-width: 22em) and (max-height: 30em) {
    top: -98%;
    transform: scale(0.35);
  }
`;

export const HeroImage = styled.div`
  position: relative;
  top: -13%;
  right: 4%;
  width: 100%;
  height: 100%;
`;

export const HeroImageFront = styled.div`
  width: 100%;
  height: 100%;
  z-index: 200;
`;

export const HeroImageBack = styled.div`
  width: 100%;
  height: 100%;
  z-index: -100;
`;

export const PortfolioText = styled.div`
  position: absolute;
  left: 39%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  z-index: 200;

  p {
    font-family: "futura_bold";
    text-transform: uppercase;
    font-size: max(55px, 7rem);
    letter-spacing: 0.1em;
    text-shadow: 0 10px 15px rgb(2 11 22 / 20%);

    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Cloud1fContainer = styled.div`
  position: absolute;

  right: -6%;
  top: 45%;
  transform: translate3d(-50%, -50%, 0);
`;

export const Cloud2fContainer = styled.div`
  position: absolute;

  right: -2%;
  bottom: 15%;
  transform: translate3d(-50%, -50%, 0);
`;

export const Cloud3fContainer = styled.div`
  position: absolute;

  left: 32%;
  bottom: 20%;
  transform: translate3d(-50%, -50%, 0);
`;

export const Cloud1bContainer = styled.div`
  position: absolute;

  right: 17%;
  top: 27%;
  transform: translate3d(-50%, -50%, 0);
`;

export const Cloud2bContainer = styled.div`
  position: absolute;

  left: 32%;
  top: 35%;
  transform: translate3d(-50%, -50%, 0);
`;

export const MoonContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);

  height: 545px;
  width: 545px;

  /* @media only screen and (${device.tablet_Land}) {
    top: 65%;
    width: 100%;
    height: 100%;
    transform: translate3d(-50%, -50%, 0) scale(0.4);
  } */
`;

export const StarsContainer = styled.div`
  position: absolute;
  left: 45%;
  top: 67%;
  transform: translate3d(-50%, -50%, 0);

  height: 1385px;
  width: 1385px;

  /* @media only screen and (${device.tablet_Land}) {
    top: 85%;
    width: 100%;
    height: 100%;
  } */
`;

export const LightsContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);

  height: 1385px;
  width: 1385px;

  /* @media only screen and (${device.tablet_Land}) {
    top: 65%;
    width: 100%;
    height: 100%;
  } */
`;
