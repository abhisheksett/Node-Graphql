import { User } from './user.model'
import merge from 'lodash.merge'

const userResolver = {

  Query: {
    getMe( root, args, { user }) {
      return user;
    }
  },

  Mutation: {
    updateMe( root, { input }) {
      merge(user, input)
      return user.save()
    }
  }
};

export default userResolver;
