import { Playlist } from './playlist.model'

const playlistResolver = {

  Query: {

    Playlist(_, { id }) {
      return Playlist.findById(id).exec()
    },

    allPlaylists() {
      return Playlist.find({}).exec()
    }
  },

  Mutation: {
    newPlaylist(_, {input}) {
      return Playlist.create(input)
    },

    updatePlaylist(_, {input}) {
      const {id, ...update} = input
      return Playlist.findByIdAndUpdate(id, update, {new: true}).exec()
    }
  }
};

export default playlistResolver;
