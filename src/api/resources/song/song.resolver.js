import { Song } from './song.model'

export default {

  Query: {
    Song(id) {
      return Song.findById(id).exec()
    },

    allSongs() {
      return Song.find({}).exec()
    }
  },

  Mutation: {
    newSong(root, { input }) {
      console.log('============================', input)
      return Song.create(input)
    },

    updateSong(root, { input }) {
      const {id, ...update} = input
      return Song.findByIdAndUpdate(id, update, { new: true }).exec()
    }
  }

}
