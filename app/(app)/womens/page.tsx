import Women from '@/features/womens/womens'
import { fetchProducts } from '@/shared/api/ProductList'

const MansPage = async () => {
	const { products, error } = await fetchProducts()

	const filteredProducts = products.filter(product => !product.sex)

	return (
		<>
			{error && <div style={{ color: 'red' }}>{error}</div>}
			<Women products={filteredProducts} />
		</>
	)
}

export default MansPage
