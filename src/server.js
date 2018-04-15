import express from 'express';
import { restRouter, graphQLRouter } from './api';
import middleware from './middleware';
import { protect } from './api/modules/auth';
import { graphiqlExpress } from 'apollo-server-express'

const app = express();
middleware(app);

app.use('/api', protect, restRouter);
app.use('/graphql',  graphQLRouter)
app.use('/graphiql',  graphiqlExpress)

app.get('/', (req, res) => {
  res.json( {ok: true} )
})

export default app;
