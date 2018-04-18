import express from 'express';
import { restRouter, graphQLRouter } from './api';
import { connect } from './db'
import middleware from './middleware';
import { protect } from './api/modules/auth';
import { graphiqlExpress } from 'apollo-server-express'

const app = express();
middleware(app);
connect();

app.use('/api', protect, restRouter);
app.use('/graphql',  graphQLRouter)
app.use('/docs', graphiqlExpress({ endpointURL: '/graphql' }))

app.get('/', (req, res) => {
  res.json( {ok: true} )
})

export default app;
