/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

import React from 'react';
import { CopyBlock, atomOneDark } from 'react-code-blocks';
import toast from 'react-hot-toast';
import { usePaletteConfigStore } from '~/pages/generate';

const ConfigCodeBlock = () => {
	const { colors } = usePaletteConfigStore();

	const jsonString = JSON.stringify(
		{
			colors: {
				primary: {
					100: colors[0],
					200: colors[1],
					300: colors[2],
					400: colors[3],
					500: colors[4],
					600: colors[5],
					700: colors[6],
					800: colors[7],
					900: colors[8],
					1000: colors[9],
					DEFAULT: colors[5],
				},
			},
		},
		null,
		4
	);

	const handleCopy = () => {
		toast.success('Copied to clipboard!');
	};
	return (
		<CopyBlock
			text={jsonString}
			language='json'
			theme={atomOneDark}
			codeBlock
			onCopy={handleCopy}
		/>
	);
};

export default ConfigCodeBlock;
