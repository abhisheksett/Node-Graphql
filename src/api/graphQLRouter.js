import { makeExecutableSchema } from 'graphql-tools'
import { userType, userResolver } from './resources/user'
import { songType, songResolver } from './resources/song'
import { playlistType, playlistResolver } from './resources/playlist'
import merge from 'lodash.merge'
import { graphqlExpress } from 'apollo-server-express'

const baseSchema = `
  schema {
    query: Query
    mutation: Mutation
  }
`

const schema = makeExecutableSchema({
  typeDefs: [
    baseSchema,
    userType,
    songType,
    playlistType
  ],
  resolvers: merge(
    {},
    userResolver,
    songResolver,
    playlistResolver
  ),
  resolverValidationOptions: { requireResolversForAllFields: false } 
})


export const graphQLRouter = graphqlExpress((req) => ({
  schema,
  context: {
    req,
    user: req.user
  }
}))
