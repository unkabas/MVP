import { Product } from '@/entities/product/products'
import { ProductCard } from '@/shared/ui/ProductCard'

interface MansProps {
	products: Product[]
}

const Mans: React.FC<MansProps> = ({ products }) => {
	return (
		<div className='grid grid-cols-4 gap-4'>
			{products.map(product => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	)
}

export default Mans
