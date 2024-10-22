export const CommunicationsIcon = ({ size }: { size: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="10" height="11" fill="url(#pattern0_501_190)" />
      <defs>
        <pattern
          id="pattern0_501_190"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_501_190"
            transform="matrix(0.0171875 0 0 0.015625 -0.05 0)"
          />
        </pattern>
        <image
          id="image0_501_190"
          width="64"
          height="64"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
