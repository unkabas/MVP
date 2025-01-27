import { Product } from '@/entities/product/products'
import axios from 'axios'

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT

export const fetchProducts = async (): Promise<{
	products: Product[]
	error: string | null
}> => {
	try {
		const response = await axios.get(`${API_ENDPOINT}`)

		console.log('Full API Response:', response.data)
		const data = response.data.data

		if (!data || !Array.isArray(data)) {
			throw new Error('Invalid data format')
		}

		const products = data.map((item: any) => ({
			id: item.id,
			name: item.name,
			price: item.price,
			description: item.description,
			imageUrl: item.Imageurl,
			isNew: item.isNew,
			sex: item.sex,
		}))

		return { products, error: null }
	} catch (err) {
		console.error('Ошибка при загрузке товаров:', err)

		const errorMessage = axios.isAxiosError(err)
			? `Ошибка при загрузке товаров: ${err.message}`
			: 'Неизвестная ошибка'

		return { products: [], error: errorMessage }
	}
}
