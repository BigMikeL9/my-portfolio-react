import React, { useRef } from "react";
import { useEffect } from "react";
import Scrollbar from "react-scrollbars-custom";
import styled from "styled-components";

import { MainS } from "./Main.style";

export const ScrollBarS = styled(Scrollbar)`
  > .ScrollbarsCustom {
    position: relative;
    width: 100%;

    &:not(.native) {
      width: 100vw;
      height: 100vh;

      & > .ScrollbarsCustom-Wrapper {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        & > .ScrollbarsCustom-Scroller {
          display: block;

          & > .ScrollbarsCustom-Content {
            padding: 0.05px;
            width: 100%;
            height: 100%;
          }
        }
      }

      & > .ScrollbarsCustom-Track {
        position: absolute;
        border-radius: 0.25rem;

        & > .ScrollbarsCustom-Thumb {
          background: rgba(255, 255, 255, 0.12);
          cursor: pointer;
          border-radius: 0.25rem;

          &:hover,
          &.dragging {
            background: #9ed6ff;
          }
        }
      }

      & > .ScrollbarsCustom-TrackY {
        width: 1rem;
        height: calc(100% - 2rem);
        top: 1rem;
        right: 0.5rem;
        background: rgba(255, 255, 255, 0.04);

        & > .ScrollbarsCustom-ThumbY {
          width: 100%;
        }
      }

      &.trackYVisible {
        & > .ScrollbarsCustom-Wrapper {
          right: 1.5rem;
        }
      }
    }
  }

  #App {
    width: 100%;

    a.link {
      color: #3996da;
      text-shadow: none;

      &:hover {
        color: #9ed6ff;
      }
    }

    @media (min-width: 620px) {
      max-width: 1280px;
      margin: auto;
    }
  }
`;

const Main = (props) => {
  const mainRef = useRef();

  useEffect(() => {
    console.log(mainRef);
  }, []);

  return (
    <>
      <ScrollBarS
        native
        trackXVisible
        trackYVisible
        noDefaultStyles
        disableTracksWidthCompensation
        style={{ position: "" }}
      >
        <MainS ref={mainRef}>{props.children}</MainS>
      </ScrollBarS>
    </>
  );
};

export default Main;
