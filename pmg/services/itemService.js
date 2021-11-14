import Item from '../models/Item';

const getAvgPriceOfSizes = async () => {
  const items = await Item.aggregate([
    {
        $project: { _id:0, price:1, sizes:1 }
    },
    {
        $unwind: "$sizes"
    },
    {
        $group: { _id: "$sizes", averagePrice: { $avg: { $sum: "$price" }}}
    },
    {
        $sort: { averagePrice: -1 }
    }
         
  ]);

  return items;
};


export { getAvgPriceOfSizes };