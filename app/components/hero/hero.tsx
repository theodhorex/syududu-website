import classNames from 'classnames';
import Link from 'next/link';
import { merryWeather } from '../../fonts';
import { AtSignIcon } from '../layouts/icons/at-sign-icon';
import { GithubIcon } from '../layouts/icons/github-icon';
import { LinkedinIcon } from '../layouts/icons/linkedin-icon';
import { XIcon } from '../layouts/icons/x-icon';
import PixelBlast from '../pixel-blast';

export default function Hero() {
	return (
		<main className='relative min-h-svh w-screen overflow-hidden'>
			<PixelBlast
				variant='circle'
				pixelSize={4}
				color='#06b6d4'
				patternScale={2}
				patternDensity={0.8}
				enableRipples={true}
				rippleIntensityScale={0.8}
				rippleThickness={0.15}
				rippleSpeed={0.4}
				edgeFade={0.3}
				transparent={true}
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					zIndex: 0
				}}
			/>
			<div
				className={classNames('relative min-h-svh', merryWeather.className)}
				style={{ zIndex: 10 }}
			>
				<div className='absolute top-[20%] md:top-[40%] max-w-5xl flex-col space-y-4 justify-center px-8 md:px-24 lg:ml-14'>
					<h1 className='text-2xl font-medium md:mr-4 md:text-4xl'>
						Hey, I&apos;m{' '}
						<span className='font-bold'>Aurelio Theodhore Riyanto</span> – a{' '}
						<span className='italic border-b-2 border-b-cyan-400'>
							Fullstack Web Developer
						</span>{' '}
						& Web3 Enthusiast.
					</h1>
					<section className='relative z-10'>
						<p className='text-base'>
							Passionate about building innovative solutions on the web. Currently studying informatics and always eager to take on exciting projects that push the boundaries of what&apos;s possible.{' '}
							<span className='font-semibold text-cyan-400'>Let&apos;s connect!</span>
						</p>
					</section>
					<section className='relative z-10 flex space-x-4 items-center text-sm'>
						<div>
							<p>More about me: </p>
							<div className='flex -ml-2'>
								<Link
									href='https://www.linkedin.com/in/theodhore-riyanto/'
									target='_blank'
									rel='noreferrer'
									aria-label='linkedin'
									data-skip-splash-cursor
								>
									<LinkedinIcon className='h-9 w-9' />
								</Link>
								<Link
									href='https://github.com/theodhorex'
									target='_blank'
									rel='noreferrer'
									aria-label='github'
									data-skip-splash-cursor
								>
									<GithubIcon className='h-9 w-9' />
								</Link>
								<Link
									href='https://x.com/0xnanode'
									target='_blank'
									rel='noreferrer'
									aria-label='twitter'
									data-skip-splash-cursor
								>
									<XIcon className='h-9 w-9' />
								</Link>
								<Link
									href='mailto:theodhore.dev@gmail.com'
									aria-label='email'
									rel='noreferrer'
									data-skip-splash-cursor
								>
									<AtSignIcon className='h-9 w-9' />
								</Link>
							</div>
						</div>
						<div className='h-14 border-l border-gray-300' />
						<div
							className='flex flex-wrap space-x-3 space-y-1'
							data-skip-splash-cursor
						>
							<Link href='/projects'>/projects</Link>
							{/* <Link href='/thoughts'>/thoughts</Link> */}
							<Link href='/uses'>/uses</Link>
							<Link href='/stats'>/stats</Link>
						</div>
					</section>
				</div>
			</div>
		</main>
	);
}
