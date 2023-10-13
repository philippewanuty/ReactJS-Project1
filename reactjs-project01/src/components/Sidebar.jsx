import styles from './Sidebar.module.css';
import { Import, PencilLine } from 'lucide-react';
import CoverImg from '../assets/cover-image.png';

export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img src={CoverImg} alt='' />
			<strong>Philippe Wanuty</strong>
			<span>UI Designer</span>

			<footer>
				<div className={styles.button}>
					<PencilLine className={styles.PencilLine}/>
					<a href='#'>Editar seu perfil</a>
				</div>
			</footer>
		</aside>
	);
}
