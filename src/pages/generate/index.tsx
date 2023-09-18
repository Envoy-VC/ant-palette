import type { ReactElement } from 'react';
import { Layout } from '~/components';
import type { NextPageWithLayout } from '../_app';

const Generate: NextPageWithLayout = () => {
	return <div>hello world</div>;
};

Generate.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};

export default Generate;
