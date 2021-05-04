import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>
  ) {}

  async listarTodos(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  async criar(product: Product): Promise<Product> {
    const productCriado = new this.productModel(product);

    return productCriado.save();
  }

  async buscarPorId(id: string): Promise<Product> {
    return this.productModel.findById(id).exec();
  }

  async atualizar(id: string, product: Product): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, product).exec();
  }

  async remover(id: string) {
    const productApagado = this.productModel.findOneAndDelete({ _id: id }).exec();

    return (await productApagado).remove();
  }
}