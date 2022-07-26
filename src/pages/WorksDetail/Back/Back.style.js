import styled from "styled-components/macro";

import Button from "../../../components/UI/Button/Button";

export const BackButtonContainer = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  padding: 20rem 0;
`;

export const BackButtonS = styled(Button)`
  display: inline-block;
  font-size: 3.2rem;
  color: #020b16;
  letter-spacing: 0.2em;
  position: relative;
  transition: 0.5s;
  transform: translate3d(44px, 0, 0);
  cursor: pointer;
  background-color: transparent;
  border: none;
  text-transform: uppercase;

  &:before {
    content: "";
    width: 24px;
    height: 1px;
    background: #020b16;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -88px;
    margin: auto;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }

  &:after {
    content: "";
    width: 64px;
    height: 2px;
    background: #020b16;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -88px;
    margin: auto;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }

  &:hover {
    transform: translate3d(0, 0, 0);

    &:before {
      left: -112px;
      transform: rotate(-45deg) translate3d(2px, -8px, 0);
    }

    &:after {
      width: 80px;
      left: -112px;
    }
  }
`;
