import { Column, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table
export class User extends Model {

  @PrimaryKey
  @Column({ autoIncrement: true, allowNull: false})
  id: number

  @Column
  firstName: string

  @Column
  lastName: string

  @Column
  email: string

  @Column
  password: string

  @Column
  age: number

  @Column({ defaultValue: false })
  married: boolean

  @Column
  race: string

  @Column
  gender: string
}