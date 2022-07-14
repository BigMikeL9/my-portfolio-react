// const sizes = {
//   mobileS: "320px",
//   mobileM: "375px",
//   mobileL: "425px",
//   tablet: "768px",
//   laptop: "1024px",
//   laptopL: "1440px",
//   desktop: "2560px",
// };

// export const devices = {
//   mobileS: `(min-width: ${sizes.mobileS})`,
//   mobileM: `(min-width: ${sizes.mobileM})`,
//   mobileL: `(min-width: ${sizes.mobileL})`,
//   tablet: `(min-width: ${sizes.tablet})`,
//   laptop: `(min-width: ${sizes.laptop})`,
//   laptopL: `(min-width: ${sizes.laptopL})`,
//   desktop: `(min-width: ${sizes.desktop})`,
// };

// import styled from 'styled-components';
// import { device } from './device';

// const ProfilePage = styled.div`
//   margin: auto;
//   text-align: center;

//   @media ${device.laptop} {
//     max-width: 800px;
//   }

//   @media ${device.desktop} {
//     max-width: 1400px;
//   }
// `;

const device = {
  mobile_S: `max-width:${"23.75em"}`, // 375px
  mobile_M: `max-width:${"26.25em"}`, // 420px
  mobile_L: `max-width:${"37.5em"}`, // 600px
  tablet_Port: `max-width:${"56.25em"}`, // 900px
  tablet_Land: `max-width:${"75em"}`, // 1200px
  desktop_L: `min-width:${"112.5em"}`, // 1800px
};

export default device;
