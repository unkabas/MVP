import { useRouter } from 'next/navigation'
import React from 'react'

interface NavButtonProps {
	title: string
	route: string
}

export const NavButton: React.FC<NavButtonProps> = ({ title, route }) => {
	const router = useRouter()

	const handleClick = () => {
		router.push(route)
	}

	return (
		<button
			onClick={handleClick}
			className='mx-2 px-4 text-foreground hover:text-primary/90 font-bold'
		>
			{title}
		</button>
	)
}
