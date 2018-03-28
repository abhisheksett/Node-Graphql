import http from 'http';
import { createServer } from 'http';
import app from './server';

const server = createServer(app);

server.listen(3000, () => {
  console.log('Server started at port 3000');
});

if (module.hot) {
	module.hot.accept(['./server'], () => {
		server.removeListener('request', currentApp)
		server.on('request', app)
		currentApp = app
	})
}
