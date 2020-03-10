import React from "react";
import styled from "~/styledComponent";
import { mobileWrapper } from "~/styledComponent/helpers";
import { keyframes } from "~/styledComponent";
import imgSpinner from "~/static/img-spinner.png";

interface Props {
  mapRef: React.RefObject<HTMLDivElement>;
  loading: boolean;
}

const Home: React.FunctionComponent<Props> = props => {
  const { mapRef, loading } = props;
  return (
    <>
      <Map ref={mapRef} />
      {loading && (
        <Loader>
          <Spinner />
        </Loader>
      )}
    </>
  );
};

const Map = styled.div`
  width: ${window.innerWidth}px;
  height: ${window.innerHeight}px;
  ${mobileWrapper};
  > div > div > div > div {
    border: none !important;
    > div {
      width: 250px;
      padding: 8px;
      white-space: pre-wrap;
      background: #ffffff;
      border-radius: 2px;
      display: flex;
      flex-direction: column;
      > div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 4px;
        p:nth-child(1) {
          width: 30%;
        }
        p:nth-child(2) {
          width: 70%;
        }
      }
    }
  }
`;

const Loader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  z-index: 10001;
  display: inline-block;
  width: 34px;
  height: 34px;
  background-image: url(${imgSpinner});
  background-size: 100%;
  animation: ${rotate360} 1.2s steps(12) infinite;
  transition-duration: 250ms;
`;

export default Home;
