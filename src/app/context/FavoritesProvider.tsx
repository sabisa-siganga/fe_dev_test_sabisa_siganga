import React, { createContext, useContext, useEffect, useState } from "react";
import { PostInterface } from "../interfaces/post";
import { useParams } from "next/navigation";

// Define the type for the context value
interface FavoritesContextType {
  favorites: PostInterface[];
  addFavorite: (favorite: PostInterface) => void;
  removeFavorite: (authorId: number) => void;
}

// Create a context with an initial value and type
const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [], // Default value for favorites array
  addFavorite: () => {},
  removeFavorite: () => {},
});

// Custom hook to access context
export const useFavorites = (): FavoritesContextType =>
  useContext(FavoritesContext);

interface FavoritesProviderProps {
  children: React.ReactNode; // Children components to be wrapped by the provider
}

/**
 * Provider component to wrap your application
 */
export const FavoritesProvider = (props: FavoritesProviderProps) => {
  const { children } = props;
  const params = useParams();

  // State for storing favorite posts
  const [favorites, setFavorites] = useState<PostInterface[]>([]);

  /**
   * Function to add a post to favorites
   */
  const addFavorite = (favorite: PostInterface) => {
    console.log("Adding favorite", favorite);

    // Check if the favorite already exists
    const exists = favorites.some((fav) => fav.id === favorite.id);

    if (exists) {
      // Do not add if already exists
      return;
    }

    // Update the local storage and state to add the new favorite at the beginning of the list
    setFavorites((prevFavorites) => [favorite, ...prevFavorites]);

    // Store favorites in local storage
    localStorage.setItem("favorites", JSON.stringify([favorite, ...favorites]));
  };

  useEffect(() => {
    // Fetch favorites from the local storage
    const favorites = localStorage.getItem("favorites");

    if (favorites) {
      setFavorites(JSON.parse(favorites));
    }
  }, [params]);

  /**
   * Remove from favorites and update the local storage and state
   */
  const removeFavorite = (postId: number) => {
    const updatedList = favorites.filter((fav) => fav.id !== postId);

    // Update the state
    setFavorites(updatedList);

    // Update the local storage
    localStorage.setItem("favorites", JSON.stringify(updatedList));
  };

  // Provide context value to children components
  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
