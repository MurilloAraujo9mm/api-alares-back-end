import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { Order } from './models/order.model';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'src/users/models/user.model';
import { Plan } from 'src/plans/models/plan.model';
import { format } from 'date-fns-tz';
import { UpdateUserDtoOrder } from './dto/update-order.dto';


@Injectable()
export class OrdersService {
  constructor(
    @InjectModel(Order) private ordersModel: typeof Order,
    @InjectModel(User) private usersModel: typeof User
  ) { }


  async createOrder(orderData: any): Promise<Order> {
    try {
      const currentDate = new Date();
      const formattedDate = format(currentDate, 'yyyy-MM-dd HH:mm:ss');
      return await this.ordersModel.create({
        id_user: orderData.id_user,
        id_plan: orderData.id_plan,
        date_order: formattedDate,
        hour_order: formattedDate,
        created_at: formattedDate,
        updated_at: formattedDate,
      });
    } catch (error) {

      throw new HttpException(
        {
          error: `${error.message}`,
        },
        HttpStatus.BAD_REQUEST
      );

    }
  }
  async findAllOrders(): Promise<Order[]> {
    return this.ordersModel.findAll({
      include: [
        {
          model: User,
          attributes: ['id_user', 'first_name', 'phone', 'email'],
        },
        {
          model: Plan,
          attributes: ['id_plan', 'name_plan', 'price', 'details'],
        },
      ],
      attributes: {
        exclude: ['id_order', 'id_user', 'id_plan'],
      },
    });
  }

  async findAllUsersWithOrders(): Promise<User[]> {
    const  usersWithOrders =  this.usersModel.findAll({
      include: [
        {
          model: Order,
          attributes: ['id_order', 'date_order', 'hour_order'],
        },
      ],
    });
    return usersWithOrders;
  }
  async findUserById(id: number): Promise<User | null> {
    return this.usersModel.findByPk(id, {
      include: [Order],
    });
  }
  async updateUser(id: number, updateUserDto: UpdateUserDtoOrder): Promise<User> {
    const user = await this.findUserById(id);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    if (updateUserDto.first_name) {
      user.first_name = updateUserDto.first_name;
    }

    if (updateUserDto.phone) {
      user.phone = updateUserDto.phone;
    }

    if (updateUserDto.email) {
      user.email = updateUserDto.email;
    }

    await user.save();

    return user;
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.findUserById(id);

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    await user.destroy();
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }
}
