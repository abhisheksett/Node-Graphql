import express from 'express';
import { restRouter } from './api';
import middleware from './middleware';
import { protect } from './api/modules/auth';

const app = express();
middleware(app);

app.use('/api', protect, restRouter);

app.get('/', (req, res) => {
  res.json( {ok: true} )
})

export default app;
