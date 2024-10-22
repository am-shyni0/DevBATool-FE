export default function BugsIcon({ size }: { size: number }) {
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
        <rect width="20" height="18" fill="url(#pattern0_488_359)" />
        <defs>
          <pattern
            id="pattern0_488_359"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_488_359"
              transform="matrix(0.0104167 0 0 0.0115741 0 -0.0555556)"
            />
          </pattern>
          <image
            id="image0_488_359"
            width="96"
            height="96"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
}
