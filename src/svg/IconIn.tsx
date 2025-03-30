import * as React from "react"
const IconIn = ({ props }: { props?: React.SVGProps<SVGSVGElement> }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        fill="none"
        className={props?.className}
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16.184 8.028a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM6.184 9.028h-4v12h4v-12ZM4.184 6.028a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
        />
    </svg>
)
export default IconIn
