import React from 'react'
import { IconProps } from './types/types'

const Songs = (props: React.SVGProps<SVGSVGElement> & IconProps) => {
	const { fillClassName, ...rest } = props
	return (
		<svg fill='none' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg' {...rest}>
			<path
				className={fillClassName}
				d='M20 2H8C6.9 2 6 2.9 6 4V16C6 17.1 6.9 18 8 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM17 7H15V12.37C15 13.64 14.1 14.81 12.84 14.97C11.15 15.2 9.73 13.72 10.04 12.02C10.24 10.92 11.22 10.07 12.34 10C12.97 9.96 13.54 10.16 14 10.51V6C14 5.45 14.45 5 15 5H17C17.55 5 18 5.45 18 6C18 6.55 17.55 7 17 7ZM3 6C2.45 6 2 6.45 2 7V20C2 21.1 2.9 22 4 22H17C17.55 22 18 21.55 18 21C18 20.45 17.55 20 17 20H5C4.45 20 4 19.55 4 19V7C4 6.45 3.55 6 3 6Z'
			/>
		</svg>
	)
}

export default Songs