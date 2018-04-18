import mongoose from 'mongoose'
import appConfig from './config'
mongoose.Promise = global.Promise

export const connect = (config = appConfig) => {
  mongoose.connect(config.db.url);
  return mongoose.connection
    .once('open', () => console.log(`Connected to MongoDB`))
    .on('error', err => console.error(`Failed to connect to MongoDB: ${err}`));
}
