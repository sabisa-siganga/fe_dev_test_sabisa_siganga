import { PostInterface } from '@/app/interfaces/post';
import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import styles from './FavButton.module.scss';
import { useFavorites } from '@/app/context/FavoritesProvider';

interface Props {
	post: PostInterface;
}

export default function FavButton(props: Props) {
	const { post } = props;

	const { addFavorite } = useFavorites();

	return (
		<button
			type='button'
			onClick={() => addFavorite(post)}
			className={styles.favBtn}
		>
			<FaRegHeart color='#e54848' size='22px' />
		</button>
	);
}
