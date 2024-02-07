'use client';

import React, { useEffect } from 'react';
import styles from './favorites.module.scss';
import { FaTrash } from 'react-icons/fa';
import { useFavorites } from '@/app/context/FavoritesProvider';

const Favorites = () => {
	const { favorites, removeFavorite } = useFavorites();

	return (
		<div className={`${styles.favoritesContainer} py-5`}>
			<div className={styles.title}>
				Favorites {favorites.length > 0 ? `(${favorites.length})` : ''}
			</div>
			<div className={styles.list}>
				{favorites.map((fav, index) => (
					<div
						key={`fav-${fav.authorId}-${index}`}
						className={styles.favorite}
					>
						<div className={styles.author}>
							{fav.authorName}
							<button
								type='button'
								onClick={() => removeFavorite(fav.authorId)}
								title='Remove from favorites'
							>
								<FaTrash color='#e54848' size='15px' />
							</button>
						</div>
						<div className={styles.body}>{fav.body}</div>
					</div>
				))}

				{favorites.length === 0 && (
					<div className={styles.noFavorites}>No favorites yet</div>
				)}
			</div>
		</div>
	);
};

export default Favorites;
