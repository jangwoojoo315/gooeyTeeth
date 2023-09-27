const GooeyTeeth = () => {
  return (
    <div style={{ filter: `url(#goo)` }}>
      {/* <button
        style={{
          backgroundColor: "transparent",
          border: 0,
          cursor: "pointer",
        }}
      >
        Test
      </button> */}
      <div style={{ display: "flex" }}>
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
              backgroundColor: "red",
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
              left: 130,
              backgroundColor: "red",
              width: 60,
              height: 120,
              borderRadius: "50% / 50%",
              rotate: "15deg",
            }}
          />
        </div>
      </div>

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
