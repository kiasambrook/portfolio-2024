import React from "react";

const CurlyArrow = ({ className }) => {
  // Calculate total length of the SVG path
  const pathRef = React.useRef(null);
  const [totalLength, setTotalLength] = React.useState(0);

  React.useEffect(() => {
    if (pathRef.current) {
      const length = pathRef.current.getTotalLength();
      setTotalLength(length);
    }
  }, []);

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 744.000000 1052.000000"
      preserveAspectRatio="xMidYMid meet"
      className={`animated-svg ${className} stroke-gray-900 dark:stroke-white`}
    >
      <g
        transform="translate(0.000000,1052.000000) scale(0.100000,-0.100000)"
        strokeWidth="40"
        fill="none"
      >
        <path
          d="M3600 8377 c-14 -7 -29 -24 -34 -38 -6 -19 28 -240 133 -859 79 -458
          147 -843 151 -856 16 -41 47 -64 88 -64 32 0 67 22 262 164 124 90 228 160
          232 157 11 -11 28 -183 28 -296 0 -515 -165 -1057 -453 -1488 -86 -127 -187
          -260 -195 -253 -2 3 -23 47 -46 99 -160 355 -392 568 -660 608 -153 23 -338
          -27 -496 -134 -67 -46 -197 -174 -242 -240 -185 -271 -182 -565 7 -816 164
          -216 462 -319 767 -266 153 26 335 100 467 189 29 20 57 36 61 36 15 0 25
          -152 24 -360 -1 -183 -4 -219 -28 -335 -37 -177 -86 -320 -166 -483 -197 -403
          -531 -742 -730 -742 -14 0 -57 16 -96 35 -79 40 -93 42 -151 15 -84 -37 -111
          -140 -53 -198 69 -70 189 -116 300 -115 173 0 345 89 543 282 288 280 505 666
          601 1071 71 295 75 667 11 972 l-16 72 28 32 c188 219 275 336 378 509 194
          328 326 705 386 1105 20 130 24 193 23 395 0 214 -2 251 -23 340 -12 55 -25
          111 -27 125 -4 23 19 42 242 200 135 96 257 188 271 204 30 36 27 87 -9 122
          -26 25 -1489 808 -1528 817 -14 3 -36 1 -50 -6z m-455 -3115 c160 -62 304
          -249 420 -544 l38 -97 -24 -21 c-156 -134 -335 -219 -508 -241 -225 -30 -453
          76 -538 248 -25 52 -28 68 -28 159 0 96 2 103 38 177 81 164 254 302 422 337
          50 10 127 3 180 -18z"
          className="animated-path"
          ref={pathRef}
          style={{ // Set initial stroke-dasharray and stroke-dashoffset
            strokeDasharray: totalLength,
            strokeDashoffset: totalLength
          }}
        />
      </g>
    </svg>
  );
};

export default CurlyArrow;
