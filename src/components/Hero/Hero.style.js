import styled from "styled-components/macro";

export const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
`;

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

export const HeroTitleContainer = styled.div``;

export const HeroImageContainer = styled.div`
  margin: auto;
  flex: 1;
  height: 100%;

  position: relative;
  top: 0;
  bottom: 0;
  left: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeroImage = styled.div`
  /* position: relative; */
  /* width: 39.350180505%;
  height: 39.350180505%; */
  position: relative;
`;

export const HeroImageFront = styled.div`
  width: 100%;
  height: 100%;
  /* z-index: 200; */
`;

export const HeroImageBack = styled.div`
  width: 100%;
  height: 100%;
  /* z-index: -100; */
`;

export const PortfolioText = styled.div`
  position: absolute;
  left: -15.5963%;
  top: 50%;
  transform: translate3d(0, -50%, 0);
  z-index: 200;

  p {
    font-family: "futura_bold";
    text-transform: uppercase;
    font-size: 7rem;
    letter-spacing: 0.1em;
    text-shadow: 0 10px 15px rgb(2 11 22 / 20%);

    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export const Cloud1fContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;

  /* top: 20.55045%;
  right: -49.357798%;
  width: 88.44%; */
`;

export const Cloud2fContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;

  /* bottom: -18.53211%;
  right: -28.6238532%;
  width: 87.155%; */
`;

export const Cloud3fContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 200;

  /* bottom: -5.137614678%;
  left: -49.357798%;
  width: 87.155%; */
`;

export const Cloud1bContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -100;

  /* top: -22.38532%;
  right: -7.706422%;
  width: 69.724%; */
`;

export const Cloud2bContainer = styled.div`
  position: absolute;

  top: -5.504587%;
  left: -38.715596%;
  width: 87.155%;
`;

export const StarsContainer = styled.div`
  position: absolute;

  top: -40%;
  left: -65%;
  width: 1385px;
  /* height: 100vh; */
  height: 100%;
`;

export const MoonContainer = styled.div``;

export const LightsContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1385px;
  height: 1385px;
  height: 1385px;
`;
