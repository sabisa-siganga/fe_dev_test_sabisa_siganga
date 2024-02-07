import React, { useEffect, useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import styles from "./CommentBox.module.scss";
import { Comment, Profile } from "@/app/interfaces/post";

// Define the props interface
interface input {
  onNewComment: (comment: Comment) => void;
  postId: number;
}

// Define the CommentBox component
export default function CommentBox(props: input) {
  // Destructure props
  const { onNewComment, postId } = props;

  // States
  const [input, setInput] = useState("");
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch profile data from the server on component mount
  useEffect(() => {
    // Function to fetch profile data
    const fetchProfile = async () => {
      try {
        // Fetch profile details from the server
        const response = await fetch("http://localhost:3000/api/my-profile");
        const profile = await response.json();

        // For now, using dummy data instead of fetching from the server
        // const profile = { id: 2, name: 'Panasonic' };

        // Set the profile state
        setProfile(profile);
      } catch (error) {
        console.error(error);

        alert("Failed to fetch profile");
      }
    };

    // Call the fetchProfile function
    fetchProfile();
  }, []); // Empty dependency array ensures this effect runs only once on mount

  // Event handler for input change
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Set the input state with the value from the event
    setInput(e.target.value);
  };

  // Event handler for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default form submission behavior
    e.preventDefault();
    // Set loading state to true
    setLoading(true);

    try {
      // Exit early if postId is falsy
      if (!postId) {
        return;
      }

      // Trim whitespace from input value
      const trimmedInput = input.trim();

      // Post comment to the server using fetch API
      await fetch(`http://localhost:3000/api/posts/${postId}/comments`, {
        method: "POST",
        body: JSON.stringify({
          text: trimmedInput,
          profileId: profile?.id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Call onNewComment function with new comment data
      onNewComment({
        comment: trimmedInput,
        authorName: profile?.name || "Anonymous",
      });

      // Clear the input state after successful submission
      setInput("");
    } catch (error) {
      // Log any errors to the console
      console.log(error);
    } finally {
      // Set loading state to false regardless of success or failure
      setLoading(false);
    }
  };

  // Render the CommentBox component
  return (
    <div className={styles.commentBox}>
      <form onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingTextarea2"
          label="Leave a comment here"
          className={styles.commentInputLabel}
        >
          <Form.Control
            as="textarea"
            onChange={onChange}
            value={input}
            className={styles.commentInput}
            placeholder="Leave a comment here"
          />
        </FloatingLabel>
        <div className={styles.commentBtn}>
          <button
            type="submit"
            // Disable the button if the input is empty, profile is not available, or loading
            disabled={input.length === 0 || !profile || loading}
            // Apply Bootstrap button styling ('btn' and 'btn-success' classes)
            className="btn btn-success"
          >
            {/* Display 'Posting...' if loading, otherwise 'Post Comment' */}
            {loading ? "Posting..." : "Post Comment"}
          </button>
        </div>
      </form>
    </div>
  );
}
