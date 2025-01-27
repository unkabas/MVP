import { Product } from '@/entities/product/products'
import { ProductCard } from '@/shared/ui/ProductCard'
import React from 'react'

interface WomenProps {
	products: Product[]
	error: string | null
}

const Women: React.FC<WomenProps> = ({ products, error }) => {
	if (error) {
		console.error('Произошла ошибка:', error)
		return <div style={{ color: 'red' }}>{error}</div>
	}

	if (!products || products.length === 0) {
		return <div>Товары не найдены.</div>
	}

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}

export default Women
