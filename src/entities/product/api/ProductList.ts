import { Product } from '@/entities/product/model/types'
import { API } from '@/shared/api/axiosInstance'
import axios from 'axios'

export const fetchProducts = async (): Promise<{
	products: Product[]
	error: string | null
}> => {
	try {
		const response = await API.get('/products')

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
		const errorMessage = axios.isAxiosError(err)
			? `Ошибка при загрузке товаров: ${err.message}`
			: 'Неизвестная ошибка'

		return { products: [], error: errorMessage }
	}
}
