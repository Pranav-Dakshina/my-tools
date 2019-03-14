import express from "express"
import session from "express-session"
import { ApolloServer, gql } from "apollo-server-express"
import cors from "cors"

import {chalkSuccess} from "./chalkConfig"
import router from "./routes"

// Get Port value from process.env.PORT or use 44152
const port = process.env.PORT || 44152

// Define Express server object
const app = express();

//
app.use(cors())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(router)

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String!,
    id: String!,
    name: String!
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
    id: () => '001',
    name: () => 'Pranav Dakshinamurthy'
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path: "/graphql" });


app.listen({ port }, () => {
  /* eslint-disable no-console */
  console.log(chalkSuccess(`🚀 Server ready at http://localhost:${port}`))
  console.log(chalkSuccess(`🚀 GraphQl Server ready at http://localhost:${port}${server.graphqlPath}`))
});
