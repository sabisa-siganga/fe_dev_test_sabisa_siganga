import React, { createContext, useContext, useEffect, useState } from 'react';
import { PostInterface } from '../interfaces/post';

// Define the type for the context value
interface FavoritesContextType {
	favorites: PostInterface[];
	addFavorite: (favorite: PostInterface) => void;
	removeFavorite: (authorId: number) => void;
}

// Create a context with an initial value and type
const FavoritesContext = createContext<FavoritesContextType>({
	favorites: [],
	addFavorite: () => {},
	removeFavorite: () => {},
});

// Custom hook to access context
export const useFavorites = (): FavoritesContextType =>
	useContext(FavoritesContext);

interface FavoritesProviderProps {
	children: React.ReactNode;
}

// Provider component to wrap your application
export const FavoritesProvider = (props: FavoritesProviderProps) => {
	const { children } = props;

	const [favorites, setFavorites] = useState<PostInterface[]>([]);

	const addFavorite = (favorite: PostInterface) => {
		console.log('Adding favorite', favorite);

		setFavorites((prevFavorites) => [...prevFavorites, favorite]);

		// Update the local storage and add the new favorite at the beginning of the list
		localStorage.setItem(
			'favorites',
			JSON.stringify([favorite, ...favorites])
		);
	};

	useEffect(() => {
		// Fetch favorites from the local storage
		const favorites = localStorage.getItem('favorites');

		if (favorites) {
			setFavorites(JSON.parse(favorites));
		}
	}, []);

	/**
	 * Remove from favorites and update the local storage and state
	 */
	const removeFavorite = (authorId: number) => {
		const updatedList = favorites.filter(
			(fav) => fav.authorId !== authorId
		);

		// Update the state
		setFavorites(updatedList);

		// Update the local storage
		localStorage.setItem('favorites', JSON.stringify(updatedList));
	};

	return (
		<FavoritesContext.Provider
			value={{ favorites, addFavorite, removeFavorite }}
		>
			{children}
		</FavoritesContext.Provider>
	);
};
