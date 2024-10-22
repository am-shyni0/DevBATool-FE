export default function TasksIcon({ size }: { size: number }) {
  return (
    <div>
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="20" height="18" fill="url(#pattern0_488_364)" />
        <defs>
          <pattern
            id="pattern0_488_364"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_488_364"
              transform="matrix(0.01 0 0 0.0111111 0 -0.0555556)"
            />
          </pattern>
          <image
            id="image0_488_364"
            width="100"
            height="100"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
}
