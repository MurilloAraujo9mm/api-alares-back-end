import {
    Table,
    Column,
    Model,
    DataType,
    HasMany,
    PrimaryKey,
    AutoIncrement,
  } from 'sequelize-typescript';
  import { Order } from '../../orders/models/order.model';
  
  @Table({tableName: "plans"})

  export class Plan extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id_plan: number;
  
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    name_plan: string;
  
    @Column(DataType.DECIMAL(10, 2))
    price: number;
  
    @Column(DataType.TEXT)
    details: string;
  
    @HasMany(() => Order)
    orders: Order[];
  }
  