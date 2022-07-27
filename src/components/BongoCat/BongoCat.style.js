import styled from "styled-components/macro";

export const BongoCatContainer = styled.div`
  width: 50%;
  /* height: 18vh; */
  opacity: 0.8;

  svg {
    height: 100%;
    width: 100%;
    overflow: visible;
  }

  #bongo-cat {
    fill: #1a1e2d;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 4;

    .laptop-cover,
    .headphone .band {
      fill: none;
    }

    .paw,
    .head {
      stroke: #ffcc81;
    }

    .laptop-keyboard {
      stroke-width: 2;
    }

    .terminal-code {
      stroke-width: 5;
    }

    .music .note,
    .laptop-base,
    .laptop-cover,
    .paw .pads {
      stroke: #ff61d8;
    }

    .table line,
    .headphone .band,
    .headphone .speaker path:nth-child(3) {
      stroke: #a5ea9b;
    }

    .terminal-frame,
    .laptop-keyboard,
    .headphone .speaker path:nth-child(2) {
      stroke: #569cfa;
    }

    .terminal-code,
    .headphone .speaker path:first-child {
      stroke: #7ed1e2;
    }
  }
`;
