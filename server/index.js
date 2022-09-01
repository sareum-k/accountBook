const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
type Etc {
  id: String
  title: String
}
  type Book {
    title: String
    author: String
    other: [Etc]
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
    other: [
      {
      id: '1',
      title: '1111'
      },
      {
        id: '2',
        title: '2222'
      }
    ]
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
        other: [
      {
      id: '1',
      title: '1111'
      },
      {
        id: '2',
        title: '2222'
      }
    ]
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const {
  ApolloServerPluginLandingPageLocalDefault
} = require('apollo-server-core');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});