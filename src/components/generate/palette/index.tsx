import React from 'react';
import { gray } from '@ant-design/colors';
import { motion } from 'framer-motion';

import { usePaletteConfigStore } from '~/pages/generate';
import toast from 'react-hot-toast';

const Palette = () => {
	const { colors } = usePaletteConfigStore();

	const copyToClipboard = (color: string) => {
		navigator.clipboard.writeText(color).catch((err) => {
			console.log(err);
		});
		toast.success('Copied: ' + color);
	};
	return (
		<div className='mx-3 my-2 flex h-full items-center justify-center'>
			<div className='hidden w-full flex-row items-center lg:flex'>
				{colors.map((color, index) => {
					return (
						<motion.div
							key={index}
							className={'group relative bottom-0 flex h-24 w-full cursor-pointer'}
						>
							<motion.div
								className='absolute bottom-0 flex h-full w-full flex-col items-center justify-center'
								style={{ color: gray.at(gray.length - index), background: color }}
								onClick={() => copyToClipboard(color)}
								whileHover={{
									height: '7rem',
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
			{/*  Small Screens  */}
			<div className='flex w-full flex-col items-center justify-center lg:hidden'>
				{colors.map((color, index) => {
					return (
						<motion.div
							key={index}
							className={'group relative flex h-24 w-full cursor-pointer'}
						>
							<motion.div
								className='absolute bottom-0 flex h-full min-w-[425px] max-w-md flex-col items-center justify-center'
								style={{ color: gray.at(gray.length - index), background: color }}
								onClick={() => copyToClipboard(color)}
								whileHover={{
									width: '109%',
									borderTopRightRadius: '0.5rem',
									borderBottomRightRadius: '0.5rem',
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
	);
};

export default Palette;
