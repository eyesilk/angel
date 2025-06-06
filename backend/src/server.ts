import { app } from './app';
import prisma from './lib/prisma';

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,refreshToken,token');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
  res.header('Content-Type', 'application/json;charset=utf-8');
  res.header('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  }

  next();
});

const PORT = process.env.PORT || 5000;

const start = async (): Promise<void> => {
  try {
    await prisma.$connect();
    console.log('MongoDB OK.');

    app.listen(PORT, (): void => {
      console.log(`Server OK. Port: ${process.env.PORT}`);
    });
  } catch (err: unknown) {
    console.log('Server shutdown with error: ', err);
  }
};

start();
