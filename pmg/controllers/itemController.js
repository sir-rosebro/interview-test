import { itemService } from "../services";

const getAvgPriceOfSizes = async (req, res) => {
  try {
    const items = await itemService.getAvgPriceOfSizes();

    return res.status(200).send({
      status: "OK",
      customer: items,
    });
  } catch (error) {
    console.log({ error });
    return res.status(500).send({
      status: "ERROR",
      message: "There was problem in the server. Contact adminstrator!!",
    });
  }
};

export { getAvgPriceOfSizes };