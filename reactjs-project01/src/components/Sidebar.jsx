import styles from './Sidebar.module.css';
import { PencilLine } from 'lucide-react';
import CoverImg from '../assets/cover-image.png';
import { Avatar } from './Avatar';


export function Sidebar() {
	return (
		<aside className={styles.sidebar}>
			<img className={styles.coverImg} src={CoverImg} alt='' />

			<div className={styles.profile}>
				<Avatar  src='https://github.com/philippewanuty.png' />

				<strong>Philippe Wanuty</strong>
				<span>Web Developer</span>
			</div>

			<footer>
				<a href='#'>
					<PencilLine className={styles.PencilLine} />
					Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
