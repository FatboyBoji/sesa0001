import * as React from "react";

const PenIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 51 54"  
    width={props.width || "2vw"}  
    height={props.height || "auto"}
    fill="none"
    {...props}
  >
    <path
      stroke="#1E1E1E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={props.strokeWidth || "1vw"}  
      d="M25.5 45h19.125M35.062 7.875a4.385 4.385 0 0 1 3.188-1.398c.592 0 1.178.124 1.725.363a4.5 4.5 0 0 1 1.462 1.035c.42.443.751.97.978 1.548a5.019 5.019 0 0 1 0 3.654 4.802 4.802 0 0 1-.977 1.548L14.875 42.75 6.375 45 8.5 36 35.063 7.875Z"
    />
  </svg>
);

export default PenIcon;
