import express from 'express';

import { dbConfig } from './entities';
import { router } from './routes';

dbConfig
.sync()
.then(() => console.log('Database Connected'))    
.catch(err => console.error(err.message))

const app = express();

app.use(express.json());
app.use(router);

export { app };
