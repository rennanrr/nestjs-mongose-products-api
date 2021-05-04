import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiModelProperty } from '@nestjs/swagger';

@Schema()
export class Product extends Document {
  @ApiModelProperty({ required: true })
  @Prop()
  price: number;

  @ApiModelProperty({ required: true })
  @Prop()
  description: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);