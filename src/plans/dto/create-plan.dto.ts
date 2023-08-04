import { IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';

export class CreatePlanDto {

    @IsNotEmpty({ message: 'O nome do plano é obrigatório' })
    @IsString({ message: 'O nome do plano deve ser uma string' })
    id_user: string;


    @IsNotEmpty({ message: 'O nome do plano é obrigatório' })
    @IsString({ message: 'O nome do plano deve ser uma string' })
    id_plan: string;



    @IsNotEmpty({ message: 'O nome do plano é obrigatório' })
    @IsString({ message: 'O nome do plano deve ser uma string' })
    plan_name: string;

    @IsNotEmpty({ message: 'O preço é obrigatório' })
    @IsNumber({}, { message: 'O preço deve ser um número' })
    price: number;

    @IsNotEmpty({ message: 'Os detalhes são obrigatórios' })
    @IsString({ message: 'Os detalhes devem ser uma string' })
    @MaxLength(255, { message: 'Os detalhes devem ter no máximo 255 caracteres' })
    details: string;

    @IsNotEmpty({ message: 'A data de criação é obrigatória' })
    createdAt: Date;

    @IsNotEmpty({ message: 'A data de atualização é obrigatória' })
    updatedAt: Date;
}

