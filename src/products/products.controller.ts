import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Product } from './product';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService
  ) {}

  @Get()
  async listarTodos(): Promise<Product[]> {
    return this.productsService.listarTodos();
  }

  @Post()
  async criar(@Body() product: Product): Promise<Product> {
    return this.productsService.criar(product);
  }

  @Get(':id')
  async buscarPorId(@Param('id') id: string): Promise<Product> {
    return this.productsService.buscarPorId(id);
  }

  @Put(':id')
  async atualizar(@Param('id') id: string, @Body() productAtualizado: Product): Promise<Product> {
    return this.productsService.atualizar(id, productAtualizado);
  }

  @Delete(':id')
  async remover(@Param('id') id: string): Promise<Product> {
    return this.productsService.remover(id);
  }

}