import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

export function Post({ author, publishedAt, content }) {
	const PublishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {locale: ptBR,});

	const PublisedDAteRelativeNow = formatDistanceToNow(publishedAt, {
		locale: ptBR
	})

	return (
		<article className={styles.post}>
			<header className={styles.postHeader}>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>
				<time title={PublishedDateFormatted} dateTime="2022-05-11 08:13:30"> {PublisedDAteRelativeNow}</time>
			</header>

			<div className={styles.textArea}>
				<p>Fala galera 👋</p>

				<p>Acabei de subir mais um jeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

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

			<div className={styles.commentList}>
				<Comment />
				<Comment />
				<Comment />
			</div>
		</article>
	);
}
