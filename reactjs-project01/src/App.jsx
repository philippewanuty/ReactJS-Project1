import { Post } from './Post';
import { Header } from './components/Header';

import './global.css';

import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				
				<Sidebar/>
				
				<main>
					<Post author='Phiilippe Wanuty' content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat provident' />
					<Post author='Jefferson Antony' content='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat provident' />
				</main>
			</div>
		</div>
	);
}
