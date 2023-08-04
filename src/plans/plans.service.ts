import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Plan } from './models/plan.model';

@Injectable()
export class PlansService {
  constructor(
    @InjectModel(Plan)
    private readonly planModel: typeof Plan,
  ) {}

  async findAll(): Promise<Plan[]> {
    return this.planModel.findAll();
  }

  async findById(id: number): Promise<Plan | null> {
    return this.planModel.findByPk(id);
  }

  async create(createPlanDto: any): Promise<Plan> {
    return this.planModel.create(createPlanDto);
  }

  async delete(id: number): Promise<number> {
    return this.planModel.destroy({
      where: { id },
    });
  }
}
