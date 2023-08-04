import { IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsNumber()
  id_user: number;

  @IsNumber()
  id_plan: number;

}
