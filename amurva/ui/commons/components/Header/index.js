/* eslint-disable no-unused-vars */
import dynamic from 'next/dynamic';

import styles from './styles.module.css';
import Image from 'next/image';


function Header({
	children,
	showUserDetails,
}) {
	return (
		<div className={styles.container}>
		<div className={styles.logo}>
			<Image src="/assets/logo2.png" alt="logo" width={150} height={50} />
		</div>
			{children}
		</div>
	);
}

export default Header;
