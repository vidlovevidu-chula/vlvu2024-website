import type { SVGProps } from "react";

interface TablerShirtFilled extends SVGProps<SVGSVGElement> {
  isSelected: boolean;
}

export function TablerShirtFilled(props: TablerShirtFilled) {
  const { isSelected, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <path d="M0 0h24v24H0z"></path>
        <path
          fill={isSelected ? "white" : "#ff6b84"}
          d="M14.883 3.007L14.978 3l.112.004l.113.017l.113.03l6 2a1 1 0 0 1 .677.833L22 6v5a1 1 0 0 1-.883.993L21 12h-2v7a2 2 0 0 1-1.85 1.995L17 21H7a2 2 0 0 1-1.995-1.85L5 19v-7H3a1 1 0 0 1-.993-.883L2 11V6a1 1 0 0 1 .576-.906l.108-.043l6-2A1 1 0 0 1 10 4a2 2 0 0 0 3.995.15l.009-.24l.017-.113l.037-.134l.044-.103l.05-.092l.068-.093l.069-.08c.056-.054.113-.1.175-.14l.096-.053l.103-.044l.108-.032l.112-.02z"
        ></path>
      </g>
    </svg>
  );
}
