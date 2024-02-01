import type { SVGProps } from "react";

interface PhPantsFill extends SVGProps<SVGSVGElement> {
  isSelected: boolean;
}

export function PhPantsFill(props: PhPantsFill) {
  const { isSelected, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill={isSelected ? "white" : "#ff6b84"}
        d="m53.44 43.5l.68-5.5A16 16 0 0 1 70 24h116a16 16 0 0 1 15.88 14l.68 5.49a4 4 0 0 1-4 4.5H57.41a4 4 0 0 1-3.97-4.49M169 64a32.06 32.06 0 0 0 31 24h3.59a4 4 0 0 0 4-4.5l-2-16a4 4 0 0 0-4-3.5ZM52.41 88H56a32.06 32.06 0 0 0 31-24H54.41a4 4 0 0 0-4 3.5l-2 16a4 4 0 0 0 4 4.5m171.47 126l-13.32-106.5a4 4 0 0 0-4-3.5H200a48.07 48.07 0 0 1-47.32-40H136v39.73a8.18 8.18 0 0 1-7.47 8.25a8 8 0 0 1-8.53-8V64h-16.68A48.07 48.07 0 0 1 56 104h-6.59a4 4 0 0 0-4 3.5L32.12 214a16 16 0 0 0 6.71 15.09a16.56 16.56 0 0 0 9.56 2.91h40.3a16 16 0 0 0 15.51-12.06l23.8-92l23.79 91.94A16 16 0 0 0 167.31 232h40.3a16.54 16.54 0 0 0 9.56-2.89a16 16 0 0 0 6.71-15.11"
      ></path>
    </svg>
  );
}
