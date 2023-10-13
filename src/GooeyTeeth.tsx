import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

const closeAnimation = keyframes`
  from {
    width:300px;
    translate:scaleX(1);
  }
  to {
   width:0px;
   opacity:0;
   translate:scaleX(0.1);

  }
`;

const openAnimation = keyframes`
  from {
    width:0px;
  }
  to {
   width:300px;
  }
`;
const Container = styled("div")(() => {
  return {
    position: "relative",
  };
});

const Div = styled("div")(() => {
  return {
    position: "absolute",
    left: 0,
    top: 0,
    width: 300,
    height: 200,

    background: "transparent",
    border: "2px solid blue",
  };
});

const Button = styled("div")<{ isHover: boolean }>(({ isHover }) => {
  return {
    position: "absolute",
    left: 0,
    top: 0,
    width: 300,
    height: 200,
    backgroundColor: "pink",
    marginLeft: 50,
    animation: isHover
      ? `${closeAnimation} 1s forwards`
      : `${openAnimation} 1s forwards`,
  };
});

const GooeyTeeth = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div style={{ filter: `url(#goo)` }}>
      <Container>
        <Button isHover={isHover}>Test</Button>

        <Div
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
        ></Div>
      </Container>
      {/* <div style={{ display: "flex" }}>
        <div>
          <div
            style={{
              backgroundColor: "red",
              width: 120,
              height: 120,
              borderRadius: 100,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 80,
              left: 30,
              backgroundColor: "blue",
              width: 60,
              height: 120,
              borderRadius: "50% / 50%",
              rotate: "-15deg",
            }}
          />
        </div>
        <div>
          <div
            style={{
              position: "absolute",
              left: 90,
              backgroundColor: "orange",
              width: 120,
              height: 120,
              borderRadius: 100,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 80,
              left: 130,
              backgroundColor: "green",
              width: 60,
              height: 120,
              borderRadius: "50% / 50%",
              rotate: "15deg",
            }}
          />
        </div>
      </div> */}

      {/* <svg>
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg> */}
    </div>
  );
};

export default GooeyTeeth;
