import { useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'; 

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

// GraphQL query to fetch user data
const GET_USER_DATA = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      posts {
        id
        title
        body
        comments {
          id
          name
          email
          body
        }
      }
    }
  }
`;

// React Component to show only name and email
const UserBasicDetails = ({ userId }) => {
  const { loading, error, data } = useQuery(GET_USER_DATA, {
    variables: { id: userId },
  });

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.user;

  return (
    <div className="user-basic-details">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
    </div>
  );
};

// React Component to show name, email, posts, and comments
const UserDetailedInfo = ({ userId }) => {
  const { loading, error, data } = useQuery(GET_USER_DATA, {
    variables: { id: userId },
  });

  if (loading) return <p>Loading user data...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const user = data.user;

  return (
    <div className="user-detailed-info">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>

      {user.posts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.body}</p>

          <div className="comments">
            <h4>Comments:</h4>
            {post.comments.map((comment) => (
              <div key={comment.id} className="comment">
                <p><strong>{comment.name}</strong> ({comment.email})</p>
                <p>{comment.body}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// React App component with routing
const App = () => {
  const [selectedUserId, setSelectedUserId] = useState("1");

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app-container">
          <h1 className="title">User Data</h1>

          <div className="dropdown-container">
            <label htmlFor="userSelect">Select User:</label>
            <select
              id="userSelect"
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(e.target.value)}
            >
              {Array.from({ length: 10 }, (_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
          </div>

          <nav className="nav-links">
            <Link to="/basic">Basic Info</Link>
            <Link to="/detailed">Detailed Info</Link>
          </nav>

          <Routes>
            <Route path="/basic" element={<UserBasicDetails userId={selectedUserId} />} />
            <Route path="/detailed" element={<UserDetailedInfo userId={selectedUserId} />} />
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
};

export default App;
