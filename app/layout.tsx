import Analytics from 'app/components/analytics/analytics';
import LenisProvider from 'app/components/providers/LenisProvider';
import ThemeProvider from 'app/components/providers/ThemeProvider';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import ThemeSwitch from './components/layouts/theme-switch/theme-switch';
import { mukta } from './fonts';
import './tailwind.css';

export const metadata: Metadata = {
	title: {
		template: '%s | Aurelio Theodhore Riyanto',
		default: 'Aurelio Theodhore Riyanto - Fullstack Web Developer & Web3 Enthusiast',
	},
	description: 'Fullstack Web Developer & Web3 Enthusiast passionate about building innovative solutions on the web. Currently studying informatics.',
	metadataBase: new URL('https://aurelio.dev'),
};

interface RootLayoutProps {
	children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang='en' suppressHydrationWarning className={mukta.className}>
			<head>
				<link
					rel='apple-touch-icon'
					sizes='192x192'
					href='/icon/icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='192x192'
					href='/icon/icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/icon/icon.png'
				/>
				<meta name='msapplication-TileColor' content='#000000' />
				<meta name='theme-color' content='#06b6d4' />
				<link rel='alternate' type='application/rss+xml' href='/feed.xml' />
			</head>
			<body className='bg-white text-black antialiased dark:bg-black dark:text-white selection:bg-primary-500 selection:text-white'>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					themes={['dark', 'light']}
					disableTransitionOnChange
					storageKey='theme'
				>
					<LenisProvider>
						<ThemeSwitch />
						{children}
					</LenisProvider>
					{process.env.NODE_ENV === 'production' && <Analytics />}
				</ThemeProvider>
			</body>
		</html>
	);
}
