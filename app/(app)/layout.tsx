import { NavigationMenu } from '@/widgets/NavigationMenu/NavigationMenu'
import { ReactElement } from 'react'

export default function Layout({ children }: { children: ReactElement }) {
	return (
		<>
			<NavigationMenu />
			{children}
		</>
	)
}
