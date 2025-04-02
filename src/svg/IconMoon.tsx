import * as React from "react"
const IconMoon = ({ props }: { props?: React.SVGProps<SVGSVGElement> }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        className={props?.className}
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.65}
            d="M19 11.9c-.158 1.896-.798 3.702-1.846 5.208-1.047 1.506-2.46 2.65-4.07 3.296a8.167 8.167 0 0 1-5.028.356c-1.672-.415-3.203-1.35-4.414-2.695-1.212-1.346-2.053-3.048-2.426-4.905a11.08 11.08 0 0 1 .32-5.586c.582-1.79 1.611-3.359 2.966-4.523C5.858 1.886 7.483 1.175 9.19 1 8.19 2.501 7.71 4.35 7.835 6.213c.125 1.861.847 3.611 2.035 4.931 1.188 1.32 2.763 2.123 4.439 2.262 1.675.139 3.34-.395 4.691-1.505Z"
        />
    </svg>
)
export default IconMoon
