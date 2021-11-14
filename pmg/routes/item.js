import express from "express";
import { itemController } from "../controllers";

const router = express.Router();

const { getAvgPriceOfSizes } = itemController;

router.get("/get_avg_price_of_sizes", getAvgPriceOfSizes);

export default router;