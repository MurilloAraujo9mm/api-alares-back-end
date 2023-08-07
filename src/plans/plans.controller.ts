import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { PlansService } from './plans.service';
import { CreatePlanDto } from './dto/create-plan.dto';
import { UpdatePlanDto } from './dto/update-plan.dto';

@Controller('plans')
export class PlansController {
  constructor(private readonly plansService: PlansService) { }

  @Post('create')
  async create(@Body() createPlanDto: CreatePlanDto) {
    try {
      return await this.plansService.create(createPlanDto);
    } catch (error) {
      throw new HttpException('Validation failed', HttpStatus.BAD_REQUEST);
    }
  }

  @Patch('/update/:id')
  async update(@Param('id') id: number, @Body() updatePlanDto: UpdatePlanDto) {
    try {
      return await this.plansService.update(id, updatePlanDto);
    } catch (error) {
      throw new HttpException('Validation failed', HttpStatus.BAD_REQUEST);
    }
  }


  @Delete('/delete/:id')
  async remove(@Param('id') id: number) {
    try {
      return await this.plansService.delete(id);
    } catch (error) {
      throw new HttpException(`
         ${error.statusCode},
         ${error.message},
      `, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.plansService.findAll();
    } catch (error) {
      throw new HttpException('Failed to fetch plans. Please try again later.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}
