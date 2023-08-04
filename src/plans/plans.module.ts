import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PlansService } from './plans.service';
import { PlansController } from './plans.controller';
import { Plan } from './models/plan.model';

@Module({
  imports: [SequelizeModule.forFeature([Plan])],
  controllers: [PlansController],
  providers: [PlansService],
})
export class PlansModule {}
