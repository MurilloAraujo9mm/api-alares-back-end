import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { User } from 'src/users/models/user.model';
import { UpdateUserDtoOrder } from './dto/update-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Post('create')
  async create(@Body() createOrderDto: CreateOrderDto) {
    try {
      return await this.ordersService.createOrder(createOrderDto);
    } catch (error) {
      throw new HttpException('Failed to create order', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.ordersService.findAllOrders();
    } catch (error) {
      throw new HttpException('Failed to fetch orders', HttpStatus.NOT_FOUND);
    }
  }

  @Get('with/users')
  async findAllUsersWithOrders() {
    try {
      const usersWithOrders: User[] = await this.ordersService.findAllUsersWithOrders();
      return usersWithOrders.map((user) => ({
        id_user: user.id_user,
        first_name: user.first_name,
        phone: user.phone,
        email: user.email
      }));
    } catch (error) {
      throw new HttpException('Failed to fetch users with orders', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch(':id/update/user')
  async updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDtoOrder) {
    try {
      return await this.ordersService.updateUser(id, updateUserDto);
    } catch (error) {
      throw new HttpException('Failed to update user', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id/delete/user')
  async deleteUser(@Param('id') id: number) {
    try {
      await this.ordersService.deleteUser(id);
      return { message: 'User deleted successfully' };
    } catch (error) {
      throw new HttpException(`
       ${error.message},
       ${error.statusCode},
      `, HttpStatus.BAD_REQUEST);
    }
  }
}
