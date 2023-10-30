import { Header } from './components/Header';
import { Post } from './components/Post';

import './global.css';

import styles from './App.module.css';
import { Sidebar } from './components/Sidebar';

// Simulação de API
const posts = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/philippewanuty.png',
			name: 'Philippe Wanuty',
			role: 'Senior Developer @ Amazon',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galera 👋' },
			{ type: 'paragraph', content: 'Estou muito feliz em compartilhar que fui contratado pela Amazon como Dev Senior.' },
			{ type: 'link', content: 'https://philippewanuty.com' },
		],
		publishedAt: new Date('2023-10-25 09:00'),
	},
	{
		id: 2,
		author: {
			avatarUrl: 'https://github.com/diego3g.png',
			name: 'Diego Fernandes',
			role: 'CTO @ Rocketseat',
		},
		content: [
			{ type: 'paragraph', content: 'Fala galera 👋' },
			{ type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
			{ type: 'Link', content: 'https://githup.com/diego3g' },
		],
		publishedAt: new Date('2023-10-12 19:00'),
	},
	
];

//FIM -  Simulação de API

export function App() {
	return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Sidebar />

				<main>
					{posts.map(post => {
						return (
							<Post
							key={post.id}
							author={post.author}
							content={post.content}
							publishedAt={post.publishedAt}
							
							/>
						)
					})}
				</main>
			</div>
		</div>
	);
}
