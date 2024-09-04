type ExcelIconProps = {
   width?: string;
   height?: string;
};

export const ExcelIcon = ({ width, height }: ExcelIconProps) => {
   return (
      <svg
         xmlns="http://www.w3.org/2000/svg"
         width={width ? width : '1em'}
         height={height ? height : '1em'}
         viewBox="0 0 32 32"
      >
         <defs>
            <linearGradient
               id="vscodeIconsFileTypeExcel0"
               x1={4.494}
               x2={13.832}
               y1={-2092.086}
               y2={-2075.914}
               gradientTransform="translate(0 2100)"
               gradientUnits="userSpaceOnUse"
            >
               <stop offset={0} stopColor="#18884f"></stop>
               <stop offset={0.5} stopColor="#117e43"></stop>
               <stop offset={1} stopColor="#0b6631"></stop>
            </linearGradient>
         </defs>
         <path
            fill="#185c37"
            d="M19.581 15.35L8.512 13.4v14.409A1.19 1.19 0 0 0 9.705 29h19.1A1.19 1.19 0 0 0 30 27.809V22.5Z"
         ></path>
         <path
            fill="#21a366"
            d="M19.581 3H9.705a1.19 1.19 0 0 0-1.193 1.191V9.5L19.581 16l5.861 1.95L30 16V9.5Z"
         ></path>
         <path fill="#107c41" d="M8.512 9.5h11.069V16H8.512Z"></path>
         <path
            d="M16.434 8.2H8.512v16.25h7.922a1.2 1.2 0 0 0 1.194-1.191V9.391A1.2 1.2 0 0 0 16.434 8.2"
            opacity={0.1}
         ></path>
         <path
            d="M15.783 8.85H8.512V25.1h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191"
            opacity={0.2}
         ></path>
         <path
            d="M15.783 8.85H8.512V23.8h7.271a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191"
            opacity={0.2}
         ></path>
         <path
            d="M15.132 8.85h-6.62V23.8h6.62a1.2 1.2 0 0 0 1.194-1.191V10.041a1.2 1.2 0 0 0-1.194-1.191"
            opacity={0.2}
         ></path>
         <path
            fill="url(#vscodeIconsFileTypeExcel0)"
            d="M3.194 8.85h11.938a1.193 1.193 0 0 1 1.194 1.191v11.918a1.193 1.193 0 0 1-1.194 1.191H3.194A1.19 1.19 0 0 1 2 21.959V10.041A1.19 1.19 0 0 1 3.194 8.85"
         ></path>
         <path
            fill="#fff"
            d="m5.7 19.873l2.511-3.884l-2.3-3.862h1.847L9.013 14.6c.116.234.2.408.238.524h.017q.123-.281.26-.546l1.342-2.447h1.7l-2.359 3.84l2.419 3.905h-1.809l-1.45-2.711A2.4 2.4 0 0 1 9.2 16.8h-.024a1.7 1.7 0 0 1-.168.351l-1.493 2.722Z"
         ></path>
         <path fill="#33c481" d="M28.806 3h-9.225v6.5H30V4.191A1.19 1.19 0 0 0 28.806 3"></path>
         <path fill="#107c41" d="M19.581 16H30v6.5H19.581Z"></path>
      </svg>
   );
};