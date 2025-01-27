import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { FC } from 'react'

export const HomePage: FC = ({}) => {
	return (
		<div className='flex flex-col items-start justify-center mt-44 ml-7 md:mt-48 md:ml-28'>
			<h1 className='text-secondary font-black text-2xl md:text-6xl'>
				Будь всегда в тренде
			</h1>
			<h1 className='text-8xl md:text-9xl font-black'>MVP*</h1>
			<h2 className='text-4xl md:text-7xl font-black'>
				luxury <span className='text-primary'>boutique</span> for all
			</h2>
			<Input
				placeholder='Футболка balenciaga'
				className='border-primary rounded-xl p-4 md:p-6 w-auto md:w-96 h-10 mt-8 md:mt-16'
			/>
			<Button className='mt-4 md:mt-8 w-auto md:w-28 rounded-xl'>Search</Button>
		</div>
	)
}
