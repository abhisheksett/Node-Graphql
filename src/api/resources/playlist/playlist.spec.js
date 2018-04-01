import createApiSpec from '../../../../tests/apiSpecs'
import { Playlist } from './playlist.model'

createApiSpec(
  Playlist,
  'playlist',
  {title: 'study jams', favorite: true}
)
