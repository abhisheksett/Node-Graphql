import express from 'express';
import { restRouter } from './api';

const app = express();

app.use('/api', restRouter);

app.get('/', (req, res) => {
  res.json( {ok: true} )
})

export default app;
