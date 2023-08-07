import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { Order } from './models/order.model';
import { User } from '../users/models/user.model'; // Importe o modelo User

@Module({
  imports: [SequelizeModule.forFeature([Order, User])], 
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
