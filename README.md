# Monorepo: GraphQL Server and React App

This monorepo contains two projects:
1. **GraphQL Server**: A Node.js server using Apollo Server to fetch data from multiple REST APIs and serve it through GraphQL.
2. **React App**: A frontend application built with React and Apollo Client to query the GraphQL server and display user data, including posts and comments.

## Project Features
- GraphQL Server:
    - Aggregates user, post, and comment data from multiple REST APIs.
    - Exposes a GraphQL API with custom queries.
- React App:
    - Fetches data from the GraphQL server and displays user information.
    - Two routes:
        - `/basic`: Shows the user’s name and email.
        - `/detailed`: Displays the user’s posts and comments.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
2. Install dependencies for both projects:

```bash
    cd server
    npm install
    cd ../client
    npm install
```

### Running the Server

1. Navigate to the server directory and start the GraphQL server:

```bash
    cd server
    npm start
```

2. The server will start on http://localhost:4000

### Running the React App

1. Open a new terminal and navigate to the `client` directory:

```bash
    cd client
    npm run dev
```

2. The React app will start at http://localhost:5173


