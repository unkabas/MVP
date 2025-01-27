import New from '@/features/new/new'
import { fetchProducts } from '@/shared/api/ProductList'

const MansPage = async () => {
	const { products, error } = await fetchProducts()

	const filteredProducts = products.filter(product => product.isNew)

	return (
		<>
			{error && <div style={{ color: 'red' }}>{error}</div>}
			<New products={filteredProducts} />
		</>
	)
}

export default MansPage
