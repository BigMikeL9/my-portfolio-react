import styled from "styled-components";
import devices from "../../../styles/Devices";

export const WorksItemS = styled.li`
  display: flex;
  justify-content: center;
  gap: 5rem 8rem;

  @media ${devices.tablet} {
    flex-direction: column;
  }

  .my-atropos {
    flex: 0 1 60%;
    box-shadow: 0 0 4rem rgb(255 255 255 / 50%);
    background-color: rgb(255 255 255 / 50%);
    border-radius: 8px;
  }
`;

export const WorksImageContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

export const GlowWrap = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:hover:after {
    transform: rotate(25deg) translate(450%, -100%);
    transition: all 1s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 400%;
    background: rgba(255, 255, 255, 0.2);
    /* background: black; */

    z-index: 999;

    filter: blur(5px);
    transform: rotate(25deg) translate(-400%, -20%);
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

export const WorksImage = styled.img`
  margin: auto;
  transition: all 0.3s;
`;

export const WorksDescription = styled.div`
  flex: 1;

  & > * {
  }
`;

export const WorksStack = styled.p`
  font-family: "futura_medium";
  font-size: 1.8rem;
  letter-spacing: 0.1em;
  margin-bottom: 1.5rem;
`;
