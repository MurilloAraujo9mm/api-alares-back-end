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

  async update(id: number, updatePlanDto: any): Promise<Plan | null> {
    const plan = await this.planModel.findByPk(id);
    if (!plan) {
      return null;
    }

    await plan.update(updatePlanDto);
    return plan;
  }

  async findById(id: number): Promise<Plan | null> {
    return this.planModel.findByPk(id);
  }

  async create(createPlanDto: any): Promise<Plan> {
    return this.planModel.create(createPlanDto);
  }

  async delete(id_plan: number): Promise<number> {
    return this.planModel.destroy({
      where: { id_plan },
    });
  }
}
