import mongoose from 'mongoose'

const ItemSchema = new mongoose.Schema(
  {
    item:String,
    price:Number,
    sizes:[String]
  }
);

export default mongoose.model("Item", ItemSchema);
