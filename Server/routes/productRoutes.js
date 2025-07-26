import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const keyword = req.query.keyword || '';
  const products = await Product.find({ name: { $regex: keyword, $options: 'i' } });
  res.json(products);
});

export default router;
