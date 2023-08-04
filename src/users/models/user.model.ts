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

@Table({
    tableName: "users",
    timestamps: false  
})
export class User extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id_user: number;

    @Column(DataType.STRING)
    first_name: string;

    @Column(DataType.STRING)
    phone: string;

    @Column(DataType.STRING)
    email: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
        field: 'created_at'
    })
    created_at: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
        field: 'updated_at'
    })
    updated_at: Date;

    @HasMany(() => Order)
    orders: Order[];
}
