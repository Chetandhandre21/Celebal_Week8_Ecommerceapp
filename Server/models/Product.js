import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number,
  category: String
});

export default mongoose.model('Product', productSchema);
