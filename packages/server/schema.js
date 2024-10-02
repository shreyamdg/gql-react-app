const { gql } = require('apollo-server');

const typeDefs = gql`
  type Comment {
    id: ID!
    name: String
    email: String
    body: String
  }

  type Post {
    id: ID!
    title: String
    body: String
    comments: [Comment]
  }

  type User {
    id: ID!
    name: String
    email: String
    posts: [Post]
  }

  type Query {
    user(id: ID!): User
  }
`;

module.exports = typeDefs;
