const resolvers = {
  Query: {
    user: async (_, { id }) => {
      try {
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await userResponse.json();

        const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
        const posts = await postsResponse.json();

        const postsWithComments = await Promise.all(
          posts.map(async (post) => {
            const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
            const comments = await commentsResponse.json();
            return { ...post, comments };
          })
        );

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          posts: postsWithComments,
        };
      } catch (error) {
        throw new Error(`Failed to fetch user data: ${error.message}`);
      }
    },
  },
};

module.exports = resolvers;
