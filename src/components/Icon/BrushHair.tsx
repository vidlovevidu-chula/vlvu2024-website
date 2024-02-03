import type { SVGProps } from "react";

interface IconParkOutlineHairBrush extends SVGProps<SVGSVGElement> {
  isSelected: boolean;
}

export function IconParkOutlineHairBrush(props: IconParkOutlineHairBrush) {
  const { isSelected, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 48 48"
      {...props}
    >
      <g
        fill="none"
        stroke={isSelected ? "white" : "#ff6b84"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={4}
      >
        <path d="M18.197 31.424c3.124 3.124 10.722.592 16.97-5.657c6.249-6.248 8.781-13.846 5.657-16.97M27.389 6.675l1.414 1.415m-6.363 3.535l1.414 1.414m-5.658 4.243l1.414 1.414m-2.828 5.657l1.414 1.414M35.167 4.554l1.414 1.414m-2.828 7.072l2.828 2.828m-7.777 2.122l2.828 2.828m-8.485 1.414l2.828 2.828"></path>
        <rect
          width={6}
          height={14}
          x={16.075}
          y={29.303}
          rx={3}
          transform="rotate(45 16.075 29.303)"
        ></rect>
      </g>
    </svg>
  );
}
