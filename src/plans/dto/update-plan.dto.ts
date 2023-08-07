import { IsNotEmpty, IsNumberString, IsOptional } from "class-validator";

export class UpdatePlanDto {
    @IsOptional()
    @IsNotEmpty()
    name_plan: string;

    @IsOptional()
    @IsNumberString()
    price: string;

    @IsOptional()
    details: string;
}
