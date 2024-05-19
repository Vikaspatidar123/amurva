import {
	useRef,
} from 'react';

import AppLayout from '../AppLayout';

import styles from './styles.module.css';

import Head from "next/head";
function GlobalLayout({
	children, layout, head, ...rest
}) {
	const elementRef = useRef(null);


	const getBody = () => {
			return <AppLayout {...rest}>{children}</AppLayout>;

	};

	return (
		<div
			ref={elementRef}
			className={styles.page_bg}
		>

			<Head>
				<title>
					Amurva App
				</title>
			</Head>

			{getBody()}
		</div>
	);
}

export default GlobalLayout;
