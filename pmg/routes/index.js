import express from "express";
import item from "./item";
import singer from './singer';

const routes = new express.Router();

routes.use("/api/item", item);
routes.use("/api/singer", singer);

export default routes;