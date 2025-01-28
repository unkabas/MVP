import { fetchProducts } from '@/entities/product/api/ProductList'
import Catalog from '@/views/Catalog/Catalog'

const MansPage = async () => {
	const { products, error } = await fetchProducts()

	const filteredProducts = products.filter(product => product.sex)

	return (
		<>
			{error && <div style={{ color: 'red' }}>{error}</div>}
			<Catalog products={filteredProducts} />
		</>
	)
}

export default MansPage
