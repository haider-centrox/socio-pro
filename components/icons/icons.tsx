import React from 'react';
export const LogoMobile: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21"
    fill="none"
    viewBox="0 0 21 21"
    {...props}
  >
    <path
      fill="#000"
      d="M20.517 10.274c0 5.202-3.866 9.501-8.88 10.181l2.6-2.973a2.16 2.16 0 0 0 .526-1.592l-.06-.738-3.643 4.083v-3.141l3.178-3.634a2.16 2.16 0 0 0 .525-1.593l-.06-.735-3.643 4.082v-3.141l3.178-3.634a2.16 2.16 0 0 0 .525-1.593l-.06-.735-3.643 4.082V5.018a.6.6 0 0 0-.597-.598h-.15a.6.6 0 0 0-.598.598v2.368L6.071 3.303l-.058.736a2.16 2.16 0 0 0 .525 1.592l3.177 3.633v3.143L6.071 8.324l-.058.734a2.15 2.15 0 0 0 .525 1.594l3.177 3.633v3.143l-3.644-4.083-.058.735a2.15 2.15 0 0 0 .525 1.595l3.177 3.634v1.23c-5.43-.274-9.748-4.764-9.748-10.263C-.033 4.601 4.567 0 10.243 0c5.675 0 10.274 4.599 10.274 10.274"
    ></path>
  </svg>
);

export const LogoDesktop: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="54"
    height="54"
    viewBox="0 0 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M53.8257 26.9549C53.8257 40.6008 43.6842 51.8813 30.5286 53.6653L37.3528 45.8655C37.85 45.2965 38.2282 44.6336 38.4649 43.916C38.7017 43.1984 38.7923 42.4406 38.7314 41.6874L38.5742 39.7524L29.0141 50.464V42.2226L37.3528 32.6887C37.8501 32.1195 38.2283 31.4564 38.4651 30.7386C38.7019 30.0207 38.7924 29.2628 38.7314 28.5094L38.5742 26.5806L29.0141 37.2922V29.0496L37.3528 19.5157C37.8501 18.9464 38.2283 18.2833 38.4651 17.5655C38.7019 16.8477 38.7924 16.0897 38.7314 15.3363L38.5742 13.4076L29.0141 24.1192V13.1656C29.0144 12.9598 28.9742 12.756 28.8957 12.5657C28.8173 12.3755 28.7022 12.2026 28.5569 12.0568C28.4116 11.9111 28.2391 11.7954 28.0491 11.7163C27.8591 11.6373 27.6554 11.5964 27.4496 11.5961H27.0566C26.6404 11.5961 26.2412 11.7615 25.9469 12.0558C25.6525 12.3501 25.4872 12.7493 25.4872 13.1656V19.3772L15.9271 8.66559L15.7737 10.5968C15.7129 11.3498 15.8036 12.1073 16.0403 12.8247C16.2771 13.5421 16.6552 14.2048 17.1522 14.7737L25.4872 24.3051V32.5502L15.9271 21.8386L15.7737 23.7649C15.712 24.5187 15.8022 25.2772 16.039 25.9955C16.2758 26.7139 16.6544 27.3773 17.1522 27.9467L25.4872 37.4781V45.7233L15.9271 35.0117L15.7737 36.9404C15.7115 37.6946 15.8015 38.4537 16.0383 39.1725C16.2751 39.8913 16.6539 40.5551 17.1522 41.1247L25.4872 50.6586V53.8836C11.24 53.165 -0.0878906 41.3855 -0.0878906 26.9599C-0.0878906 12.0702 11.9823 0 26.872 0C41.7617 0 53.8257 12.0652 53.8257 26.9549Z"
      fill="black"
    />
  </svg>
);
export const HamburgerIcon: React.FC<React.SVGProps<SVGSVGElement>> = (
  props
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="#101010"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.667"
      d="M17.5 5h-15m15 5h-10m10 5h-5"
    ></path>
  </svg>
);

export const CloseIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#757575"
      strokeLinecap="round"
      strokeWidth="2"
      d="M20 20 4 4m16 0L4 20"
    ></path>
  </svg>
);

export const ChatIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="27"
    fill="none"
    viewBox="0 0 32 27"
    {...props}
  >
    <path
      fill="#101010"
      d="M9.128 9.563a2.27 2.27 0 1 0 0 4.541 2.27 2.27 0 0 0 0-4.54m7.265 0a2.27 2.27 0 1 0 0 4.54 2.27 2.27 0 0 0 0-4.54m4.995 2.27a2.27 2.27 0 1 1 4.541 0 2.27 2.27 0 0 1-4.54 0"
    ></path>
    <path
      fill="#101010"
      fillRule="evenodd"
      d="M23.84.65A92 92 0 0 0 9.131.578l-.35.027A8.955 8.955 0 0 0 .5 9.532v15.47a1.362 1.362 0 0 0 2.007 1.2l7.102-3.817a2.3 2.3 0 0 1 1.077-.27H26.99a4.26 4.26 0 0 0 4.187-3.494c.748-4.1.806-8.295.174-12.414l-.185-1.216a4.84 4.84 0 0 0-4.374-4.09zM9.338 3.295a89 89 0 0 1 14.273.069l2.95.252a2.12 2.12 0 0 1 1.913 1.79l.187 1.213c.584 3.82.528 7.711-.164 11.514a1.526 1.526 0 0 1-1.505 1.257H10.686c-.825 0-1.638.205-2.365.595l-5.096 2.74V9.532a6.23 6.23 0 0 1 5.76-6.212z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const Star = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#101010"
      d="m8 12.216 3.32 2.008a.798.798 0 0 0 1.192-.864l-.88-3.776 2.936-2.544c.536-.464.248-1.344-.456-1.4l-3.864-.328-1.512-3.568c-.272-.648-1.2-.648-1.472 0l-1.512 3.56-3.864.328c-.704.056-.992.936-.456 1.4l2.936 2.544-.88 3.776a.798.798 0 0 0 1.192.864z"
    ></path>
  </svg>
);

export const Arrow = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx="12" cy="12" r="12" fill="url(#paint0_linear_965_784)"></circle>
    <path
      fill="#101010"
      d="m8.15 16.8-.95-.948 6.512-6.498H7.88V8h8.14v8.123h-1.357v-5.821z"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_965_784"
        x1="24"
        x2="0"
        y1="12"
        y2="12"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FFE4CB"></stop>
        <stop offset="1" stopColor="#FF9F4D"></stop>
      </linearGradient>
    </defs>
  </svg>
);
