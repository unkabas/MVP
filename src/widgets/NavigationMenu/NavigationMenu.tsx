'use client'
import { APP_ROUTES } from '@/shared/config/routes'
import { Avatar, AvatarImage } from '@/shared/ui/avatar'
import { NavButton } from './ui/NavButton'

interface NavItem {
	title: string
	route: string
}

export const NavigationMenu = () => {
	const NavItems: NavItem[] = [
		{
			title: "Man's",
			route: APP_ROUTES.mans,
		},
		{
			title: "Women's",
			route: APP_ROUTES.womens,
		},
		{
			title: 'New Collection',
			route: APP_ROUTES.newcollection,
		},
	]

	return (
		<nav className='flex flex-col md:flex-row md:justify-between '>
			<div className='flex justify-between items-center'>
				{/* Логотип и кнопка MVP */}
				<div className='flex justify-between'>
					<div className='text-xl'>
						<NavButton title='MVP' route={APP_ROUTES.home} />
					</div>
				</div>

				<div className='flex justify-end md:hidden items-center mx-2 px-4'>
					<NavButton title='Cart' route={APP_ROUTES.cart} />
					<Avatar>
						<AvatarImage
							src='https://avatars.githubusercontent.com/u/1830321?v=4'
							alt='User Avatar'
						/>
					</Avatar>
					<span className='ml-2 text-white'>User Name</span>
				</div>
			</div>

			<div className='flex justify-center w-full mt-2 md:mt-0'>
				{NavItems.map((item, index) => (
					<NavButton key={index} title={item.title} route={item.route} />
				))}
			</div>

			<div className='hidden md:flex justify-start ml-auto items-center mx-2 px-4'>
				<NavButton title='Cart' route={APP_ROUTES.cart} />
				<div className='flex items-center'>
					<Avatar>
						<AvatarImage
							src='https://avatars.githubusercontent.com/u/1830321?v=4'
							alt='User Avatar'
						/>
					</Avatar>
					<span className='ml-2 text-white self-center'>User Name</span>
				</div>
			</div>
		</nav>
	)
}
