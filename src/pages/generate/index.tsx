import type { ReactElement } from 'react';
import { Layout } from '~/components';
import type { NextPageWithLayout } from '../_app';

import { create } from 'zustand';
import { PaletteConfig, Palette } from '~/components/generate';

interface PaletteConfigState {
	theme: 'default' | 'dark';
	primaryColor: string;
	backgroundColor: string;
	colors: string[];
	setTheme: (theme: 'default' | 'dark') => void;
	setPrimaryColor: (color: string) => void;
	setBackgroundColor: (color: string) => void;
	setColors: (colors: string[]) => void;
}

export const usePaletteConfigStore = create<PaletteConfigState>()((set) => ({
	theme: 'default',
	primaryColor: '#1890ff',
	backgroundColor: '#fff',
	colors: [
		'#e6f7ff',
		'#bae7ff',
		'#91d5ff',
		'#69c0ff',
		'#40a9ff',
		'#1890ff',
		'#096dd9',
		'#0050b3',
		'#003a8c',
		'#002766',
	],
	setTheme: (theme: 'default' | 'dark') => set({ theme }),
	setPrimaryColor: (color: string) => set({ primaryColor: color }),
	setBackgroundColor: (color: string) => set({ backgroundColor: color }),
	setColors: (colors: string[]) => set({ colors }),
}));

const Generate: NextPageWithLayout = () => {
	return (
		<div className='h-full p-4'>
			<div className='flex flex-col gap-8 rounded-lg px-3 py-2 lg:flex-row'>
				<div className='h-full w-full basis-1/4'>
					<PaletteConfig />
				</div>
				<div className='w-full basis-3/4'>
					<Palette />
				</div>
			</div>
		</div>
	);
};

Generate.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Generate;
