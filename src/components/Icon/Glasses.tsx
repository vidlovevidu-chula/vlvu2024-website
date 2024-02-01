import React from "react";
import type { SVGProps } from "react";

interface EmojioneMonotoneTopHat extends SVGProps<SVGSVGElement> {
  isSelected: boolean;
}

export function EmojioneMonotoneTopHat(props: EmojioneMonotoneTopHat) {
    const { isSelected, ...rest } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill={isSelected ? "white" : "#ff6b84"}
        d="M61.338 41.881c-1.663-3.873-5.663-4.015-11.069-3.241c.041-9.028 1.562-17.65 4.452-27.072c1.344-3.374-8.67-9.501-22.72-9.567c-14.05.066-24.065 6.192-22.721 9.566c2.873 9.365 4.384 18.047 4.438 27.07c-5.399-.771-9.394-.627-11.057 3.243C-.961 49.077 10.487 62 32 62c21.514 0 32.961-12.923 29.338-20.119m-48.856 5.962s1.357-4.745 1.14-7.254c11.804 10.624 24.954 10.624 36.757 0c.045 2.56 1.139 7.254 1.139 7.254c-11.62 11.057-27.415 11.057-39.036 0"
      ></path>
    </svg>
  );
}
