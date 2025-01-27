export const APP_ROUTES = {
	home: '/',
	mans: '/mans',
	womens: '/womens',
	newcollection: '/new',
	auth: '/auth',
	cart: '/cart',
	product: (id: string) => `/product/${id}`,
}
