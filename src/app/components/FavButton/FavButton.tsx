import { PostInterface } from "@/app/interfaces/post";
import React from "react";
import { FaRegHeart } from "react-icons/fa";
import styles from "./FavButton.module.scss";
import { useFavorites } from "@/app/context/FavoritesProvider";

// Defining Props interface for the FavButton component
interface Props {
  // Declaring a prop named 'post' of type PostInterface
  post: PostInterface;
}

// Declaring and exporting the FavButton component
export default function FavButton(props: Props) {
  // Destructuring the 'post' prop from the props object
  const { post } = props;

  // Using the useFavorites hook to get the addFavorite function
  const { addFavorite } = useFavorites();

  // Rendering the FavButton component
  return (
    <button
      type="button"
      // Attaching an onClick event handler to call addFavorite with the post object
      onClick={() => addFavorite(post)}
      // Applying the favBtn class from the imported styles
      className={styles.favBtn}
    >
      {/* Rendering the heart icon with specified color and size   */}
      <FaRegHeart color="#e54848" size="22px" />
    </button>
  );
}
