import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, requiered: true, unique: true },
    slug: { type: String, requiered: true, unique: true },
    image: { type: String, requiered: true },
    brand: { type: String, requiered: true },
    category: { type: String, requiered: true },
    description: { type: String, requiered: true },
    price: { type: Number, requiered: true },
    countInStock: { type: Number, requiered: true },
    rating: { type: Number, requiered: true },
    numReviews: { type: Number, requiered: true },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
