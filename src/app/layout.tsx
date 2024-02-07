'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { FavoritesProvider } from './context/FavoritesProvider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<FavoritesProvider>{children}</FavoritesProvider>
			</body>
		</html>
	);
}
