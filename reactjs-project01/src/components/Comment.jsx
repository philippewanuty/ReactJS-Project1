import styles from './Comment.module.css';

import { Trash2, ThumbsUp } from 'lucide-react';
import { Profile } from './Avatar';

export function Comment() {
	return (
		<div className={styles.commentBody}>
			<Profile hasBorder={false} src='https://github.com/maykbrito.png' />

			<div className={styles.commentMain}>
				<div className={styles.comment}>
					<header className={styles.header}>
						<div className={styles.authorAndTime}>
							<strong>Philippe Wanuty</strong>
							<time title='06 de Fevereiro às 17h'>cerca de 2h atrás</time>
						</div>

						<button className={styles.trashButton} title='Deletar comentario'>
							<Trash2 className={styles.Trash2} />
						</button>
					</header>
					<p>Muito bom, parabéns!!</p>
				</div>
				<footer>
					<button className={styles.buttonFooter}>
						<ThumbsUp className={styles.ThumbsUp} />
						Aplaudir<span>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
}
