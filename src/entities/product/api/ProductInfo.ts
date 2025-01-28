import { Product } from '@/entities/product/model/types'
import { API } from '@/shared/api/axiosInstance'
import axios from 'axios'

export const fetchProductById = async (
	id: string
): Promise<{
	product: Product | null
	error: string | null
}> => {
	try {
		const response = await API.get(`/products/${id}`)

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
		const errorMessage = axios.isAxiosError(err)
			? `Ошибка при загрузке продукта: ${err.message}`
			: 'Неизвестная ошибка'

		return { product: null, error: errorMessage }
	}
}
