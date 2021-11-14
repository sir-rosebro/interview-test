import express from "express";
import { singerController } from "../controllers";

const router = express.Router();

const { getSingersByName } = singerController;

router.get("/get_singers_by_name", getSingersByName);

export default router;