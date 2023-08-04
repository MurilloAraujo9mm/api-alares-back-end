import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Order } from './orders/models/order.model';
import { Plan } from './plans/models/plan.model';
import { User } from './users/models/user.model';
import { PlansModule } from './plans/plans.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'No2zCBBWBEgBBH5A8xNd',
      database: 'api_alares_backend',
      models: [Order, Plan, User],
      autoLoadModels: true,
      synchronize: true,
    }),
    UsersModule,
    ConfigModule.forRoot(),
    PlansModule,
    OrdersModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
