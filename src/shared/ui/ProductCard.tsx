import { Product } from '@/entities/product/model/types'
import { APP_ROUTES } from '@/shared/config/routes'
import Link from 'next/link'
import React from 'react'
import { Button } from './button'

interface ProductCardProps {
	product: Product
	className?: string
}

export const ProductCard: React.FC<ProductCardProps> = ({
	product,
	className,
}) => {
	const imageUrl = product.imageUrl

	return (
		<Link href={APP_ROUTES.product(product.id)} legacyBehavior>
			<a className={`flex flex-col items-center space-y-2 p-6 ${className}`}>
				<img
					src={imageUrl}
					alt={product.name}
					className='w-full h-40 object-cover'
				/>
				<h2 className='text-xl font-bold'>{product.name}</h2>
				<p className='text-lg font-semibold'>{product.price} руб.</p>
				<Button className='mt-4'>Купить</Button>
			</a>
		</Link>
	)
}
