import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

const closeAnimation = keyframes`
  0% {
opacity:1;
transform:scale(1)

  }
  50% {
opacity:0;
transform:scale(0)
  }

  100% {
    opacity:1;
    transform:scale(1)
    
      }
`;

const moveHeadDownAnimation = keyframes`
  0%{
    top:-10px
  }
  50%{
    top:5px
  }
  100%{
    top:-10px
  }
`;

const moveLegDownAnimation = keyframes`
  0%{
    top:-4px
  }
  50%{
    top:60px
  }
  100%{
    top:-4px
  }
`;

const Container = styled("div")(() => {
  return {
    position: "relative",
  };
});

// const Div = styled("div")(() => {
//   return {
//     position: "absolute",
//     left: 0,
//     top: 0,
//     width: 230,
//     height: 130,
//     background: "transparent",
//     color: "white",
//     fontSize: 20,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//   };
// });

const Text = styled("span")(() => {
  return {
    position: "absolute",
    top: 50,
    left: 88,
    color: "white",
  };
});

const Div = styled("div")(() => {
  return {
    position: "absolute",
    left: 0,
    top: -50,
    width: 220,
    height: 220,
    opacity: 1,
    borderRadius: "50%",
    backgroundColor: "rgb(0, 191, 165)",
    animation: `${closeAnimation} 1s forwards infinite`,
  };
});

const Head = styled("div")<{ left: boolean }>(({ left }) => {
  return {
    backgroundColor: "rgb(0, 191, 165)",
    position: "absolute",
    left: left ? 13 : 103,
    width: 110,
    height: 110,
    top: 0,
    borderRadius: 100,
    animation: `${moveHeadDownAnimation} 1s forwards infinite`,
  };
});

const Leg = styled("div")<{ left: boolean }>(({ left }) => {
  return {
    position: "absolute",
    top: 5,
    left: left ? 38 : 130,
    backgroundColor: "rgb(0, 191, 165)",
    width: 60,
    height: 115,
    borderRadius: "50% / 50%",
    rotate: left ? "-15deg" : "15deg",
    animation: `${moveLegDownAnimation} 1s forwards infinite`,
  };
});

const GooeyTeeth = () => {
  return (
    <div>
      <Container style={{ filter: `url(#goo)` }}>
        <div>
          <Head left={true} />
          <Head left={false} />

          <Leg left={true} />
          <Leg left={false} />
        </div>

        <Div />
        {/* <Text>Loading</Text> */}
      </Container>

      <svg>
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
      </svg>
    </div>
  );
};

export default GooeyTeeth;
