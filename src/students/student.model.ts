import { Column, Model, Table } from 'sequelize-typescript';

@Table({tableName: "students", underscored: true})
export class Students extends Model<Students>{
    @Column({ primaryKey: true, autoIncrement: true })
    id: number;
  
    @Column
    firstName: string;
  
    @Column
    lastName: string;

    @Column
    age: number;

    @Column
    occupation: string;

    @Column
    class: number

    // constructor(id?: number, firstName?: string, lastName?: string, age?: number, occupation?: string) {
    //     super();
    //     if (id !== undefined && firstName !== undefined && lastName !== undefined && age !== undefined && occupation !== undefined)
    //     this.id = id;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.age = age;
    //     this.occupation = occupation;
    //   }
}