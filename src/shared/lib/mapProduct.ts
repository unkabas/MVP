import { Product } from '@/entities/product/products'

export const mapProducts = (data: any[]): Product[] => {
	return data.map(item => ({
		id: item.id,
		name: item.name,
		description: item.description,
		price: item.price,
		imageUrl: item.imageUrl,
		isNew: item.isNew,
		sex: item.sex,
	}))
}
