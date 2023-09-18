import React from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import ThemeSwitcher from '../theme-switcher';

// Icons
import Logo from 'public/logo.png';

const Navbar = () => {
	const { theme } = useTheme();
	return (
		<div className='sticky top-0 z-10 p-6'>
			<div className='navbar-shadow flex flex-row items-center justify-between rounded-full bg-white !bg-opacity-30 px-6 py-3 !backdrop-blur-lg !backdrop-filter dark:bg-[#181818]'>
				<div className='flex flex-row items-center gap-4'>
					<Image
						src={Logo.src}
						width={36}
						height={36}
						alt='Logo'
						className='w-8 sm:w-9'
					/>
					<div className='text-xl font-semibold sm:text-2xl'>Ant Palette</div>
				</div>
				<div className='flex flex-row items-center gap-2'>
					<ThemeSwitcher />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
