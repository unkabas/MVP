import { Product } from '@/entities/product/products'
import { ProductCard } from '@/shared/ui/ProductCard'

interface NewProps {
	products: Product[]
}

const New: React.FC<NewProps> = ({ products }) => {
	return (
		<div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}

export default New
