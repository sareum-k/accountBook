const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Movie{
    title: String
    actor: String
  }
  type Query{
    movies: [Movie]
  }
`
const movies = [
  {
    title: 'Top Gun',
    actor: 'Tom'
  },
  {
    title: 'Lalaland',
    actor: 'Emma Stone'
  }
]

const resolvers = {
  Query: {
    movies: () => movies,
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded'
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})