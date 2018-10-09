// import dependencies
import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import config from '../config/config.dev';
import router from './routes';

const port = config.serverPort;
// define the Express app
const app = express();

// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(json());

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));
app.use('/micro-posts', router);
app.get('/', (req, res) => res.send('Hello World!'));
// start the server
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
