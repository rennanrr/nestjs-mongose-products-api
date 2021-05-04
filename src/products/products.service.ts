import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>
  ) { }

  async listAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async create(product: Product): Promise<Product> {
    const created = new this.productModel(product);
    return created.save();
  }

  async findById(id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }

  async update(id: string, product: Product): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, product).exec();
  }

  async remove(id: string) {
    const deleted = this.productModel.findOneAndDelete({ _id: id }).exec();

    return (await deleted).remove();
  }
}