'use client'
import { Item } from '@/views/Product/ui'
import { useParams } from 'next/navigation'

const ProductPage = () => {
	const { id } = useParams()

	// Проверка, что id доступен
	if (!id) {
		return <div>Loading...</div>
	}

	const item = productList.find(p => p.id === String(id))

	if (!item) {
		return <div>Product not found</div>
	}

	return <Item product={item} />
}

export default ProductPage
