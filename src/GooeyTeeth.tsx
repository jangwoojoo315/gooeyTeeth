import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";

const closeAnimation = keyframes`
  from {
opacity:1;
transform:scale(1)

  }
  to {
opacity:0;
transform:scale(0)
  }
`;

const openAnimation = keyframes`
  from {
opacity:0;
transform:scale(0)

  }
  to {
opacity:1;
transform:scale(1)
  }
`;

const moveHeadUpAnimation = keyframes`
  from{
    top:5px
  }
  to{
    top:-10px
  }
`;

const moveHeadDownAnimation = keyframes`
  from{
    top:-10px
  }
  to{
    top:5px
  }
`;

const moveLegDownAnimation = keyframes`
  from{
    top:5px
  }
  to{
    top:60px
  }
`;

const moveLegUpAnimation = keyframes`
  from{
    top:60px
  }
  to{
    top:5px
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
    width: 230,
    height: 130,
    background: "transparent",
    color: "white",
    fontSize: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
});

const Button = styled("div")<{ isHover: boolean | null }>(({ isHover }) => {
  return {
    position: "absolute",
    left: 0,
    top: 0,
    width: 230,
    height: 130,
    opacity: 1,
    borderRadius: 16,
    backgroundColor: "rgb(0, 191, 165)",
    animation:
      isHover == null
        ? undefined
        : isHover
        ? `${closeAnimation} 1s forwards`
        : `${openAnimation} 1s forwards`,
  };
});

const Head = styled("div")<{ isHover: boolean | null; left: boolean }>(
  ({ isHover, left }) => {
    return {
      backgroundColor: "rgb(0, 191, 165)",
      position: "absolute",
      left: left ? 10 : 100,
      width: 120,
      height: 120,
      top: 5,
      borderRadius: 100,
      animation:
        isHover === null
          ? undefined
          : isHover
          ? `${moveHeadUpAnimation} 0.7s forwards`
          : `${moveHeadDownAnimation} 0.7s forwards`,
    };
  }
);

const Leg = styled("div")<{ isHover: boolean | null; left: boolean }>(
  ({ isHover, left }) => {
    return {
      position: "absolute",
      top: 5,
      left: left ? 40 : 135,
      backgroundColor: "rgb(0, 191, 165)",
      width: 60,
      height: 110,
      borderRadius: "50% / 50%",
      rotate: left ? "-15deg" : "15deg",
      animation:
        isHover === null
          ? undefined
          : isHover
          ? `${moveLegDownAnimation} 0.7s forwards`
          : `${moveLegUpAnimation} 0.7s forwards`,
    };
  }
);

const GooeyTeeth = () => {
  const [isHover, setIsHover] = useState<boolean | null>(null);
  useEffect(() => {
    console.log(isHover);
  }, [isHover]);
  return (
    <div>
      <Container style={{ filter: `url(#goo)` }}>
        <div>
          <Head isHover={isHover} left={true} />
          <Head isHover={isHover} left={false} />

          <Leg isHover={isHover} left={true} />
          <Leg isHover={isHover} left={false} />
        </div>

        <Button isHover={isHover} />
        <Div
          onMouseEnter={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
        >
          <span>Login</span>
        </Div>
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
