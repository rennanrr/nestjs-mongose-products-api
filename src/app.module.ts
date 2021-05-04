import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { ProductModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => (configService.getMongooseConfig()),
    }),
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

