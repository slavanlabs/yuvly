type YuvlyMascotProps = {
    size?: number
    className?: string
  }
  
  export function YuvlyMascot({ size = 120, className }: YuvlyMascotProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className={className}
      >
        <g transform="translate(100 100) scale(0.8233) translate(-100.05 -99.99)">
          <path
            d="M 141.2 59.545 C 177.007 64.647 202.034 77.317 202.084 100 C 202.025 122.681 177.003 135.351 141.203 140.459 C 135.936 175.587 123.01 200.091 100 200.116 C 76.985 200.114 64.048 175.621 58.776 140.48 C 22.999 135.35 -1.952 122.665 -1.978 100 C -1.961 77.334 22.995 64.648 58.779 59.523 C 64.05 24.383 76.983 -0.122 100 -0.131 C 123.012 -0.099 135.934 24.417 141.2 59.545 Z"
            fill="#60A5FA"
          />
        </g>
  
        {/* left eye */}
        <ellipse cx="86" cy="89" rx="6.5" ry="8" fill="#111" />
        {/* right eye */}
        <ellipse cx="114" cy="89" rx="6.5" ry="8" fill="#111" />
  
        {/* eye shines */}
        <circle cx="88.5" cy="85.5" r="2.2" fill="white" />
        <circle cx="116.5" cy="85.5" r="2.2" fill="white" />
  
        {/* nose */}
        <circle cx="100" cy="99" r="2.5" fill="#111" />
  
        {/* left blush */}
        <ellipse cx="79" cy="103" rx="8" ry="4.5" fill="#f4a0b0" opacity="0.8" />
        {/* right blush */}
        <ellipse cx="121" cy="103" rx="8" ry="4.5" fill="#f4a0b0" opacity="0.8" />
      </svg>
    )
  }