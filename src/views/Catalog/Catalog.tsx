import { Product } from '@/entities/product/model/types'
import { ProductCard } from '@/shared/ui/ProductCard'

interface CardsProps {
	products: Product[]
}

const Catalog: React.FC<CardsProps> = ({ products }) => {
	return (
		<div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}

export default Catalog
