import Mans from '@/features/mans/mans'
import { fetchProducts } from '@/shared/api/ProductList'

const MansPage = async () => {
	const { products, error } = await fetchProducts()

	const filteredProducts = products.filter(product => product.sex)

	return (
		<>
			{error && <div style={{ color: 'red' }}>{error}</div>}
			<Mans products={filteredProducts} />
		</>
	)
}

export default MansPage
