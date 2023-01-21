import {Column, Model, Table} from "sequelize-typescript";

@Table
export class User extends Model {
    @Column
    firstName: string

    @Column
    userName: string

    @Column
    email: string

    @Column
    password: string


}