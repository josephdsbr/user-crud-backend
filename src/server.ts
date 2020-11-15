require('dotenv/config');

import { app } from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Process running on port: ${port}`));