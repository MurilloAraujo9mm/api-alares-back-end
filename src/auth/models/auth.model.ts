// src/auth/auth.model.ts

import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({tableName: "auth_user"})
export class AuthModel extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  last_login: Date;

  @Column({
    type: DataType.STRING,
    unique: true,
  })
  token: string

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
  })
  updatedAt: Date;
}
