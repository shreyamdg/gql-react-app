# GraphQL Server

This is a Node.js GraphQL server that aggregates data from multiple REST APIs (users, posts, and comments) using GraphQL to serve a streamlined set of information to clients. The server is built with `Apollo Server` and queries the following APIs:
- [Users API](https://jsonplaceholder.typicode.com/users)
- [Posts API](https://jsonplaceholder.typicode.com/posts)
- [Comments API](https://jsonplaceholder.typicode.com/comments)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
```bash
    git clone https://github.com/your-repo.git
    cd your-repo/server
```
2. Install the dependencies:

```bash
    npm install
```
### Running the Server

1. Start the GraphQL server:

```bash
    npm start
```

2. The server will start at http://localhost:4000
3. You can access the GraphQL playground at http://localhost:4000/graphql to run queries.