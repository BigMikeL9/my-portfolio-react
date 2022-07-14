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

  // 900px
  @media screen and (${device.tablet_Port}) {
    align-self: flex-end;
    bottom: 6rem;
  }
`;

export const HeroImageContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 32%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin: auto;
  transition: all 0.3s;

  height: 1385px;
  width: 1385px;

  transform: scale(1.1);

  @media screen and (${device.tablet_Port}) {
    transform: unset;
  }

  // 900px
  @media screen and (${device.tablet_Port}) {
    width: 100vw;
    height: 100vw;
    left: 23%;
  }

  @media screen and (${device.mobile_L}) {
    width: 135vw;
    height: 135vw;
    left: 50%;
    top: -18%;
    bottom: auto;
    transform: translate3d(-50%, 0, 0);
  }

  @media screen and (${device.mobile_M}) {
    width: 160vw;
    height: 160vw;
    top: -15%;
    left: 55%;
  }
`;

export const HeroImage = styled.div`
  position: relative;
  width: 39.350180505%;
  height: 39.350180505%;
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
  left: -15.5963%;
  top: 50%;
  transform: translate3d(0, -50%, 0);

  p {
    font-family: "futura_bold";
    text-transform: uppercase;
    font-size: max(60px, 7rem);
    letter-spacing: 0.1em;
    text-shadow: 0 10px 15px rgb(2 11 22 / 20%);

    color: ${({ theme }) => theme.colors.secondary};

    /* @media screen and (${device.tablet_Land}) {
      font-size: 6rem;
    } */

    @media screen and (${device.tablet_Port}) {
      font-size: min(40px, 3.8rem);
    }

    /* 🔴🏮🔴🏮🔴🔴 */
    @media screen and (max-width: 28em) {
      font-size: max(24px, 3rem);
    }
  }
`;

export const Cloud1fContainer = styled.div`
  position: absolute;

  top: 20.55045%;
  right: -49.357798%;
  width: 88.44%;
`;

export const Cloud2fContainer = styled.div`
  position: absolute;

  bottom: -18.53211%;
  right: -28.6238532%;
  width: 87.155%;
`;

export const Cloud3fContainer = styled.div`
  position: absolute;

  bottom: -5.137614678%;
  left: -49.357798%;
  width: 87.155%;
`;

export const Cloud1bContainer = styled.div`
  position: absolute;

  top: -22.38532%;
  right: -7.706422%;
  width: 69.724%;
`;

export const Cloud2bContainer = styled.div`
  position: absolute;

  top: -5.504587%;
  left: -38.715596%;
  width: 87.155%;
`;

export const MoonContainer = styled.div``;

export const StarsContainer = styled.div`
  height: 1385px;
  width: 1385px;
  position: absolute;
  top: -43%;
  bottom: 0;
  right: -83%;

  // 900px
  @media screen and (${device.tablet_Port}) {
    width: 100vw;
    height: 100vw;
    left: 23%;
  }

  @media screen and (${device.mobile_L}) {
    width: 135vw;
    height: 135vw;
    left: 50%;
    top: -18%;
    bottom: auto;
    transform: translate3d(-50%, 0, 0);
  }

  @media screen and (${device.mobile_M}) {
    width: 160vw;
    height: 160vw;
  }
`;

export const LightsContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);

  height: 1385px;
  width: 1385px;

  // 900px
  @media screen and (${device.tablet_Port}) {
    width: 100vw;
    height: 100vw;
  }

  @media screen and (${device.mobile_L}) {
    width: 135vw;
    height: 135vw;
    left: 50%;
    top: -75%;
    bottom: auto;
    transform: translate3d(-50%, 0, 0);
  }

  @media screen and (${device.mobile_M}) {
    width: 160vw;
    height: 160vw;
    top: -77%;
  }
`;
