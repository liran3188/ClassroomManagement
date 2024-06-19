import { Column, Model, Table } from 'sequelize-typescript';

@Table({tableName: "classrooms", underscored: true})
export class Classrooms extends Model<Classrooms>{
    @Column({ primaryKey: true, autoIncrement: true })
    id: number;
  
    @Column
    name: string;
  
    @Column
    capacity: number;

    // constructor(id?: number, name?: string, capacity?: number) {
    //   super();
    //   if (id !== undefined && name !== undefined && capacity !== undefined) {
    //     this.id = id;
    //     this.name = name;
    //     this.capacity = capacity;
    //   }
    // }
}