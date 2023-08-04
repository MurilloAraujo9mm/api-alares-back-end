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
import { AuthModule } from './auth/auth.module';
import { ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ThrottlerGuard } from '@nestjs/throttler';

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
    AuthModule,
    ThrottlerModule.forRoot({
      ttl: 30, 
      limit: 5, 
    }),
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
  
})
export class AppModule { }
