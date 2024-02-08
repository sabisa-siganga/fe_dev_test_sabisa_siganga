## Posts Project

This project is a web application built with Next.js, React, Typescript, Sass, React Bootstrap, and React Context. It provides functionality for viewing, filtering, and interacting with posts, as well as managing favorites.

## Thought Process

### Problem Statement

The goal is to build a web application that allows users to view and interact with posts. The application should provide features such as filtering posts, viewing post details, adding comments, and managing favorites.

### Technology Stack Selection

- **Next.js**: Chosen for its server-side rendering capabilities, which improve performance and SEO. Also, its ease of setup and integration with React.
- **React**: Provides a flexible and efficient way to build user interfaces, facilitating component-based development.
- **Sass**: Selected for its enhanced CSS features like variables and mixins, making styling more maintainable and organized.
- **React Bootstrap**: Utilized for its ready-to-use UI components, enabling rapid development and ensuring responsiveness.
- **React Context**: Adopted for state management, allowing data to be shared across components without the need for prop drilling.
- **TypeScript**: Used for static typing, improving code maintainability and catch errors during development.

### Design and Architecture

- **Home Page**: Designed to display all available posts, enabling users to quickly browse and filter them.
- **Post Detail Page**: Created to present detailed information about a post, including the text body and author. Comments are displayed below the post for easy access.
- **Adding Comments**: Implemented a text area to allow users to add comments to posts. Comments are associated with their respective posts and displayed accordingly.
- **User Profile**: Provided a backend endpoint `/api/my-profile` to retrieve user profile information, ensuring user-specific features are accessible.
- **Favoriting Posts**: Enabled users to favorite posts, enhancing user experience by allowing quick access to preferred content. Favorites persist across sessions, enhancing usability.

### Implementation Approach

- **Component-Based Architecture**: Adopted to break down the application into reusable and manageable components, promoting code reuse and maintainability.
- **Client-Side Filtering**: Implemented to enhance performance by filtering posts on the client side, reducing server load and improving user experience.
- **API Integration**: Integrated backend endpoints to fetch post data and user profiles, ensuring seamless interaction with external resources.
- **State Management**: Utilized React Context to manage application state, ensuring data consistency and simplifying state sharing across components.

### Functionality

- **Home Page**: Lists all available posts with titles and authors.
- **Filtering**: Includes an input field to filter posts on the client side.
- **Post Detail Page**: Clicking on a post routes you to a new page displaying the text body and author of the post.
- **Comments**: Comments and their authors are listed below each post.
- **Adding Comments**: Allows users to add comments to posts using a text area.
- **User Profile**: User profile can be accessed via `/api/my-profile`.
- **Favoriting Posts**: Users can favorite posts, making them viewable on a favorites list available on every page. Favorites persist on page refresh.

### Tech Stack

- **Next.js**: React framework for server-rendered applications.
- **React**: JavaScript library for building user interfaces.
- **Sass**: CSS preprocessor for styling.
- **React Bootstrap**: Library for building responsive and mobile-first websites using React components.
- **React Context**: Provides a way to share data between components without having to explicitly pass props through every level of the component tree.
  **TypeScript**: Used for static typing, improving code maintainability and catching errors during development.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sabisa-siganga/fe_dev_test_sabisa_siganga.git

   ```

2. Navigate to the project directory:

   cd fe_dev_test_sabisa_siganga

3. Install dependencies:

   npm install

# or

yarn install

4. Run the development server:

npm run dev

# or

yarn dev

5. Open your browser and navigate to http://localhost:3000 to view the application.

**Usage**

1. Browse the home page to view all available posts.
2. Use the input field to filter posts by title or author.
3. Click on a post to view its detail page, including the text body and author.
4. Scroll down to view comments and add your own comment using the text area.
5. Access your user profile via /api/my-profile.
6. Favorite posts to view them on the favorites list available on every page.
