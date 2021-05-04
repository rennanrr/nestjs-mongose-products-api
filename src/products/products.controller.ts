import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from './product';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService
  ) { }

  @Get()
  async listAll(): Promise<Product[]> {
    return this.productsService.listAll();
  }

  @Post()
  async create(@Body() product: Product): Promise<Product> {
    return this.productsService.create(product);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Product> {
    return this.productsService.findById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() productAtualizado: Product): Promise<Product> {
    return this.productsService.update(id, productAtualizado);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Product> {
    return this.productsService.remove(id);
  }

}