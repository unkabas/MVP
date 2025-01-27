'use client'

import { Product as ProductType } from '@/entities/product/products'
import { Button } from '@/shared/ui/button'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/shared/ui/select'
import { FC, useState } from 'react'

interface ProductProps {
	product: ProductType
}

export const Item: FC<ProductProps> = ({ product }) => {
	const [count, setCount] = useState(1)
	const [selectedSize, setSelectedSize] = useState<string | undefined>(
		undefined
	)

	return (
		<div className='flex flex-col md:flex-row items-center mt-28'>
			<div className='w-full md:w-5/12 flex justify-center items-center'>
				<img
					src={product.imageUrl}
					alt={product.name}
					className='w-full max-w-xs md:w-full h-auto object-cover'
				/>
			</div>
			<div className='w-full md:w-7/12 p-8 flex flex-col justify-center'>
				<h2 className='text-7xl font-black mb-4'>{product.name}</h2>
				<p className='text-lg mb-4'>{product.description}</p>
				<div className='mb-4'>
					<label
						htmlFor='size-select'
						className='block text-lg font-semibold mb-2'
					>
						Выберите размер:
					</label>
					<Select onValueChange={value => setSelectedSize(value)}>
						<SelectTrigger id='size-select'>
							<SelectValue placeholder='Выберите размер' />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value='S'>S</SelectItem>
								<SelectItem value='M'>M</SelectItem>
								<SelectItem value='L'>L</SelectItem>
								<SelectItem value='XL'>XL</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div className='flex items-center mb-4'>
					<Button onClick={() => setCount(count > 1 ? count - 1 : 1)}>-</Button>
					<span className='mx-4'>{count}</span>
					<Button onClick={() => setCount(count + 1)}>+</Button>
				</div>
				<p className='text-lg font-semibold mb-4'>{product.price} руб.</p>
				<Button
					className='mt-4'
					onClick={() =>
						alert(`Вы выбрали ${count} штук размера ${selectedSize}`)
					}
				>
					Купить
				</Button>
				<p className='mt-4 text-sm text-gray-500'>Категория: {product.sex}</p>
				{product.isNew && (
					<span className='text-green-500 text-center mt-2'>New</span>
				)}
			</div>
		</div>
	)
}
