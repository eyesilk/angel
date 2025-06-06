import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import errorMiddleware from './middlewares/error.middleware';

import { authRouter } from './modules/auths';
import { brandRouter } from './modules/brands';
import { cartRouter } from './modules/carts';
import { favoriteRouter } from './modules/favorites';
import { productRouter } from './modules/products';

dotenv.config();

export const app: Application = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

app.use('/brand', brandRouter);
app.use('/auth', authRouter);
app.use('/product', productRouter);
app.use('/cart', cartRouter);
app.use('/favorite', favoriteRouter);

app.use(errorMiddleware);
