import styles from './Post.module.css';
import { Profile } from './Profile';
import { Comment } from './Comment';

export function Post() {
	return (
		<article className={styles.post}>
			<header className={styles.postHeader}>
				<div className={styles.author}>
					<Profile />
					<div className={styles.authorInfo}>
						<strong>Philippe Wanuty</strong>
						<span>Front-End Developer</span>
					</div>
				</div>
				<time title='06 de Fevereiro às 17h' dateTime='2023-02-06 17:00:07'>
					Públicado há 1h
				</time>
			</header>

			<div className={styles.textArea}>
				<p>Fala galera 👋</p>

				<p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

				<p>
					<a href=''>jane.design/doctorcare</a>
				</p>
				<p>
					<a href=''>#novoprojeto </a>
					<a href=''>#nlw </a>
					<a href=''>#rocketseat </a>
				</p>
			</div>

			<form className={styles.feedback}>
				<strong>Deixe o seu feedback</strong>

				<textarea className={styles.inputText} placeholder='Deixe o seu comentário' />

				<footer>
					<button type='submit' className={styles.inputButton}>
						Publicar
					</button>
				</footer>
			</form>

	
			<Comment />
			<Comment />
			<Comment />
		</article>
	);
}
