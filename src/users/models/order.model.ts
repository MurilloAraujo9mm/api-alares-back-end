import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { User } from './user.model';
import { Plan } from './plan.model';

@Table({tableName: "orders"})

export class Order extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id_order: number;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  id_user: number;

  @ForeignKey(() => Plan)
  @Column(DataType.INTEGER)
  id_plan: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date_order: Date;

  @Column({
    type: DataType.TIME,
    allowNull: false,
  })
  hour_order: string;

  @CreatedAt
  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
    field: 'created_at'
  })
  createdAt: Date;

  @UpdatedAt
  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
    field: 'updated_at'
  })
  updatedAt: Date;

  @BelongsTo(() => User)
  user: User;

  @BelongsTo(() => Plan)
  plan: Plan;
}
