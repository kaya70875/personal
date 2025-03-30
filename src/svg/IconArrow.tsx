import * as React from "react"
const IconArrow = ({ props }: { props?: React.SVGProps<SVGSVGElement> }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className={`lucide lucide-arrow-down h-6 w-6 ${props?.className}`}
        {...props}
    >
        <path d="M12 5v14M19 12l-7 7-7-7" />
    </svg>
)
export default IconArrow
