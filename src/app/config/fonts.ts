import { Fira_Code, Montserrat } from 'next/font/google'

export const fontSans = Montserrat({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const fontMono = Fira_Code({
	subsets: ['latin'],
	variable: '--font-mono',
})
