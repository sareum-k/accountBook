import "reflect-metadata"
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import { ApolloServer, gql } from 'apollo-server'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'

// graphQL의 타입을 적는다.
const typeDefs = gql`
  # 타입 지정
  type User {
    id: Int
    firstName: String
    lastName: String
    age: String
  }
  type Query {
    users: [User]
  }
`;

// API
const resolvers = {
    Query: {
        users: async () => {
            const result = await User.find()
            return result;
        },
    }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  plugins: [
    ApolloServerPluginLandingPageLocalDefault({ embed: true }),
  ],
});

AppDataSource.initialize()
    .then(async () => {
        console.log('연결 성공!')

        server.listen().then(({ url }) => {
            console.log(`🚀  Server ready at ${url}`);
        });

    // const user = new User()
    // user.firstName = "Sareumi"
    // user.lastName = "Kang"
    // user.age = 25
    // await AppDataSource.manager.save(user)
    // const users = await AppDataSource.manager.find(User)

}).catch(error => console.log(error))
