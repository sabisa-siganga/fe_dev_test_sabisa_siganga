"use client";

import React, { useEffect } from "react";
import styles from "./favorites.module.scss";
import { FaTrash } from "react-icons/fa";
import { useFavorites } from "@/app/context/FavoritesProvider";

const Favorites = () => {
  // Destructure favorites and removeFavorite function from useFavorites hook
  const { favorites, removeFavorite } = useFavorites();

  // Render component
  return (
    <div className={`${styles.favoritesContainer} py-5`}>
      <div className={styles.title}>
        {/* Render title with number of favorites */}
        Favorites {favorites.length > 0 ? `(${favorites.length})` : ""}
      </div>
      <div className={styles.list}>
        {/* Map over favorites array and render each favorite */}
        {favorites.map((fav, index) => (
          <div key={`fav-${fav.id}-${index}`} className={styles.favorite}>
            <div className={styles.author}>
              {/* Render author name */}
              {fav.authorName}
              {/* Button to remove favorite */}
              <button
                type="button"
                // Call removeFavorite function with favorite ID
                onClick={() => removeFavorite(fav.id)}
                title="Remove from favorites"
              >
                {/* Trash icon */}
                <FaTrash color="#e54848" size="15px" />
              </button>
            </div>
            {/* Render favorite body */}
            <div className={styles.body}>{fav.body}</div>
          </div>
        ))}

        {/* Render message if there are no favorites */}
        {favorites.length === 0 && (
          <div className={styles.noFavorites}>No favorites yet</div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
