import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
	const [newCommentText, setNewCommentText] = useState('');

	const [comments, setComments] = useState(['Ta dificil mas eu vou conseguir']);

	function HandleCreateNewComment() {
		event.preventDefault();

		setComments([...comments, newCommentText]);
		setNewCommentText('');
	}

	function handleNewCommentChange() {
		setNewCommentText(event.target.value);
	}

	const PublishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });

	const PublisedDateRelativeNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

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
				<time title={PublishedDateFormatted} dateTime={publishedAt.toISOString()}>
					{PublisedDateRelativeNow}
				</time>
			</header>

			<div className={styles.textArea}>
				{content.map((Line) => {
					if (Line.type === 'paragraph') {
						return <p key={Line.content}>{Line.content}</p>;
					} else if (Line.type === 'link') {
						return (
							<p key={Line.content}>
								<a href='#'>{Line.content}</a>
							</p>
						);
					}
				})}
			</div>

			<form onSubmit={HandleCreateNewComment} className={styles.feedback}>
				<strong>Deixe o seu feedback</strong>

				<textarea className={styles.inputText} name='comment' placeholder='Deixe o seu comentário' value={newCommentText} onChange={handleNewCommentChange} />

				<footer>
					<button type='submit' className={styles.inputButton}>
						Publicar
					</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map((comment) => {
					return <Comment key={comment} content={comment} />;
				})}
			</div>
		</article>
	);
}
