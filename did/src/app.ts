import express, { Request, Response } from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@sparkleid/common';
import { createDidRouter } from './routes/new';
import { Client, PrivateKey } from '@hashgraph/sdk';
import { fromString } from '@hashgraph/sdk/lib/EntityIdHelper';

// import { Client } from '@hashgraph/sdk';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);

app.use(currentUser as any);

app.use(createDidRouter);

app.all('*', async (req, res ) => {
  throw new NotFoundError();
});

app.use(errorHandler as any);



export { app };
