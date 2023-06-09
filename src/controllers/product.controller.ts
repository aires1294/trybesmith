import { Request, Response } from 'express';
import ProductService from '../services/product.service';

class ProductController {
  public productService = new ProductService();

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.productService.getAll();
    res.status(200).json(products);
  };

  public createProduct = async (req: Request, res: Response) => {
    const product = req.body;
    const newProduct = await this.productService.createProduct(product);
    res.status(201).json(newProduct);
  };
}

export default ProductController;