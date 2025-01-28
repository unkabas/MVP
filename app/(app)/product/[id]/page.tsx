import { fetchProductById } from '@/entities/product/api/ProductInfo'
import { Item } from '@/views/Product'

const ProductPage = async ({ params }: { params: { id: string } }) => {
	const { id } = await params

	const { product, error } = await fetchProductById(id)

	if (error) {
		return <div>Ошибка: {error}</div>
	}

	if (!product) {
		return <div>Продукт с ID {id} не найден.</div>
	}

	return <Item product={product} />
}

export default ProductPage
