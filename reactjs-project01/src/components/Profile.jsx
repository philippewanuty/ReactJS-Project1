import styles from './Profile.module.css';
import Avatar from '../assets/avatar.jpg';

export function Profile() {
	return (
		
			<img className={styles.profileImg} src={Avatar} alt='' />
		
	);
}
