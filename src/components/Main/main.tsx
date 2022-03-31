import styles from './main.module.css';
import Form from '../Form/form';
import { ToastContainer } from 'react-toastify';

import logo from '../../assets/images/logo.svg';

function Main() {
	return (
		<main id={styles.main}>
			<div className={styles.imageHero} />
			<nav className={styles.nav}>
				<img src={logo} alt="logo image" className={styles.logo} />
			</nav>
			<div className={styles.intro}>
				<div className={styles.contentCont}>
					<h1 className={styles.title}>
						<span className={styles.titleEspecialWord}>WE'RE</span>
						<br /> COMING <br />SOON
					</h1>
					<p className={styles.text}>
						Hello fellow shoppers! We're currently building our new fashion store. Add your email below to
						stay up-to-date with announcements and our launch deals
					</p>
					<Form />
				</div>
			</div>
			<ToastContainer />
		</main>
	);
}

export default Main;
