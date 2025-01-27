import Mans from '@/features/mans/mans'
import { fetchProducts } from '@/shared/api/Product'

const MansPage = async () => {
	const { products, error } = await fetchProducts()

	return (
		<>
			{error && <div style={{ color: 'red' }}>{error}</div>}
			<Mans products={products} />
		</>
	)
}

export default MansPage
