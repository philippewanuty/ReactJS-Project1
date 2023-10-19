import styles from './Comment.module.css';
import Avatar from '../assets/avatar.jpg';
import { Trash2,ThumbsUp} from 'lucide-react';

export function Comment() {
	return (
		<div className={styles.commentBody}>
			<img src={Avatar} alt='' />
			<div className={styles.commentMain}>
				<div className={styles.comment}>
					<div className={styles.header}>
						<div className={styles.headerText}>
							<strong>Philippe Wanuty</strong>
							<time title='06 de Fevereiro às 17h'>cerca de 2h</time>
						</div>
						<Trash2 className={styles.Trash2} />
					</div>
					<p>Muito bom, parabéns!!</p>
				</div>
				<div className={styles.footer}>
					<ThumbsUp className={styles.ThumbsUp} />
					<span>Aplaudir</span>
				</div>
			</div>
		</div>
	);
}
