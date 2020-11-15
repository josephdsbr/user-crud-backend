import express from 'express';
import compression from 'compression';
import { dbConfig } from './entities';
import { router } from './routes';
import cors from 'cors';
import helmet from 'helmet';

dbConfig
.sync()
.then(() => console.log('Database Connected'))    
.catch(err => console.error(err.message))

const app = express();

app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(router);

export { app };
