import React from 'react';
import { generate } from '@ant-design/colors';
import { Select, ConfigProvider, ColorPicker, Button } from 'antd';

import { usePaletteConfigStore } from '~/pages/generate';

const PaletteConfig = () => {
	const {
		theme,
		primaryColor,
		backgroundColor,
		setTheme,
		setPrimaryColor,
		setBackgroundColor,
		setColors,
	} = usePaletteConfigStore();

	const generateColorPalette = () => {
		const colors = generate(primaryColor, {
			theme,
			backgroundColor,
		});

		setColors(colors);
	};
	return (
		<div className='h-full rounded-lg bg-[#C3E4CD] p-4 text-[#49584D]'>
			<div className='flex flex-col justify-between gap-4'>
				<div className='my-4 flex flex-col  gap-4'>
					<span className='font-gintoBold text-2xl'>Palette Details</span>
					<div className='flex flex-row items-center gap-2'>
						<span className='font-gintoMedium text-lg'>Theme:</span>
						<ConfigProvider
							theme={{
								token: {
									colorBgContainer: '#EDF6F0',
									colorText: '#49584D',
									borderRadius: 12,
									controlOutline: 'none',
									colorPrimaryHover: 'none',
									fontFamily: 'Ginto Medium',
								},
								components: {
									Select: {
										optionSelectedBg: '#EDF6F0',
									},
								},
							}}
						>
							<Select
								defaultValue='light'
								size='middle'
								value={theme}
								style={{ width: 120 }}
								onChange={(value) => setTheme(value as 'default' | 'dark')}
								options={[
									{ value: 'default', label: 'Light' },
									{ value: 'dark', label: 'Dark' },
								]}
							/>
						</ConfigProvider>
					</div>
					<div className='flex flex-row items-center gap-2'>
						<span className='font-gintoMedium text-lg'>Primary Color:</span>

						<ColorPicker
							defaultValue='#fff'
							onChange={(color) => {
								setPrimaryColor(color.toHexString());
							}}
							value={primaryColor}
							showText
							className='border-none bg-[#EDF6F0] px-2 font-gintoMedium outline-none hover:!border-none hover:!outline-none'
						/>
					</div>
					<div className='flex flex-row items-center gap-2'>
						<span className='font-gintoMedium text-lg'>Background Color:</span>

						<ColorPicker
							defaultValue='#fff'
							onChange={(color) => {
								setBackgroundColor(color.toHexString());
							}}
							value={backgroundColor}
							showText
							className='border-none bg-[#EDF6F0] px-2 font-gintoMedium outline-none hover:!border-none hover:!outline-none'
						/>
					</div>
				</div>
				<Button
					className='mt-8 flex max-w-fit items-center justify-center bg-[#3D4B41] !p-5 !pb-6 font-gintoMedium !text-xl text-[#D8DBD9] hover:!bg-[#3D4B41] hover:!text-[#D8DBD9]'
					shape='round'
					type='text'
					size='large'
					onClick={generateColorPalette}
				>
					Generate
				</Button>
			</div>
		</div>
	);
};

export default PaletteConfig;
