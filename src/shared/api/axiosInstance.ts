import axios from 'axios'

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT

if (!API_ENDPOINT) {
	throw new Error('API_ENDPOINT не задан')
}

export const API = axios.create({
	baseURL: API_ENDPOINT,
})
