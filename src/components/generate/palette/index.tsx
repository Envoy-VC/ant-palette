import React from 'react';
import { gray } from '@ant-design/colors';
import { motion } from 'framer-motion';

import { usePaletteConfigStore } from '~/pages/generate';
import toast from 'react-hot-toast';
import clsx from 'clsx';

const Palette = () => {
	const { colors, theme } = usePaletteConfigStore();

	const copyToClipboard = (color: string) => {
		navigator.clipboard.writeText(color).catch((err) => {
			console.log(err);
		});
		toast.success('Copied: ' + color);
	};
	return (
		<div className='mx-3 my-2 flex h-full flex-col items-center justify-center gap-4'>
			<div className='flex w-full flex-col gap-4'>
				<span className='font-gintoMedium text-2xl text-[#49584D]'>
					Primary Colors
				</span>
				<div className='flex w-full flex-col items-center lg:flex-row'>
					{colors.map((color, index) => {
						return (
							<motion.div
								key={index}
								className={'group relative bottom-0 flex h-24 w-full cursor-pointer'}
							>
								<motion.div
									layout
									className={clsx(
										'absolute bottom-0 flex h-full w-full flex-col items-center justify-center',
										'lg:[--height-on-hover:7rem]',
										'[--height-on-hover:6rem]',
										'lg:[--width-on-hover:100%]',
										'[--width-on-hover:105%]'
									)}
									style={{ color: gray.at(gray.length - index + 1), background: color }}
									onClick={() => copyToClipboard(color)}
									whileHover={{
										height: 'var(--height-on-hover)',
										width: 'var(--width-on-hover)',
										borderTopRightRadius: '0.5rem',
										borderTopLeftRadius: '0.5rem',
										justifyContent: 'space-between',
									}}
								>
									<span className='mb-6 font-gintoMedium'>{`color-${
										(index + 1) * 100
									}`}</span>
									<div className='hidden text-[0.7rem] transition-all duration-300 ease-in-out group-hover:!flex'>
										{color}
									</div>
								</motion.div>
							</motion.div>
						);
					})}
				</div>
			</div>
			{/* Neutral Color Palette  */}
			<div className='flex w-full flex-col gap-4'>
				<span className='font-gintoMedium text-2xl text-[#49584D]'>
					Neutral Colors
				</span>
				<div className='flex w-full flex-col items-center lg:flex-row'>
					{(theme === 'default' ? gray : gray.toReversed()).map((color, index) => {
						return (
							<motion.div
								key={index}
								className={'group relative bottom-0 flex h-24 w-full cursor-pointer'}
							>
								<motion.div
									layout
									className={clsx(
										'absolute bottom-0 flex h-full w-full flex-col items-center justify-center text-white',
										'lg:[--height-on-hover:7rem]',
										'[--height-on-hover:6rem]',
										'lg:[--width-on-hover:100%]',
										'[--width-on-hover:105%]'
									)}
									style={{ background: color }}
									onClick={() => copyToClipboard(color)}
									whileHover={{
										height: 'var(--height-on-hover)',
										width: 'var(--width-on-hover)',
										borderTopRightRadius: '0.5rem',
										borderTopLeftRadius: '0.5rem',
										justifyContent: 'space-between',
									}}
								>
									<span className='mb-6 font-gintoMedium'>{`gray-${
										(index + 1) * 100
									}`}</span>
									<div className='hidden text-[0.7rem] transition-all duration-300 ease-in-out group-hover:!flex'>
										{color}
									</div>
								</motion.div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Palette;
