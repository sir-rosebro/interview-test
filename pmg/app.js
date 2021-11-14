import express from "express";
import dotenv from "dotenv";
import createError from 'http-errors'
import mongoose from 'mongoose';

import routes from "./routes";

const app = express();
dotenv.config();

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true 
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log("DB CONNECTION ERR", err));


const { PORT } = process.env;

app.use(routes);

app.use((req, res, next) => {
  next(createError(404, 'The requested page is not found.'));
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`API Up and running on ${PORT}`);
});

export default app;