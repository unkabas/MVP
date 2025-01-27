import { Product } from '@/entities/product/products'
import axios from 'axios'

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT

if (!API_ENDPOINT) {
	throw new Error('API_ENDPOINT не задан')
}

export const fetchProductById = async (
	id: string
): Promise<{
	product: Product | null
	error: string | null
}> => {
	try {
		const response = await axios.get(`${API_ENDPOINT}/${id}`)

		console.log('Full API Response:', response.data)
		const data = response.data.data

		if (!data || typeof data !== 'object') {
			throw new Error('Invalid data format')
		}

		const product: Product = {
			id: data.id,
			name: data.name,
			price: data.price,
			description: data.description,
			imageUrl: data.Imageurl,
			isNew: data.isNew,
			sex: data.sex,
		}

		return { product, error: null }
	} catch (err) {
		console.error(`Ошибка при загрузке продукта с ID ${id}:`, err)

		const errorMessage = axios.isAxiosError(err)
			? `Ошибка при загрузке продукта: ${err.message}`
			: 'Неизвестная ошибка'

		return { product: null, error: errorMessage }
	}
}
