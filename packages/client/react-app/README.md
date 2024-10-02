# React GraphQL App

This is a React frontend that interacts with a GraphQL server to fetch user data, including posts and comments, from multiple REST APIs. The app uses `Apollo Client` for data management and `react-router-dom` for routing between different views.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Navigate to the React app directory:

```bash
    cd your-repo/client
```

2. Install the dependencies:

```bash
    npm install
```

### Running the App

1. Start the development server:

```bash
    npm run dev
```

2. Open the app in your browser http://localhost:5173

### Features

- **Basic User Info Route**: Shows only the name and email of the selected user.
- **Detailed User Info Route**: Displays the user’s name, email, posts, and the comments for each post.
- **User Selection**: Use a dropdown to select from a list of users (1–10).

### Routes
`/basic`: Displays the user's name and email.
`/detailed`: Shows the user's posts and the corresponding comments.