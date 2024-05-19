
import styles from './styles.module.css'
// const navOption=['Home','About Us','Products','Recipes','Contact Us']
const navOption=[{
	title:'Home',
	url:'/'
},{
	title:'About',
	url:'/about'
},{
	title:'Contact',
	url:'/contact'
}]
import { useRouter } from 'next/router';
function NavBar() {
	const router = useRouter()
	return (
		<div className={styles.menu}>
		<div className={styles.head}>
		{navOption.map((item)=>
			<div className={styles.a} key={item.title} onClick={()=>router.push(item.url)}>{item.title}</div>
		)}
		</div>
		</div>
	);
}

export default NavBar;
