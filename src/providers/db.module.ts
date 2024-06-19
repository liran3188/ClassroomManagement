import { Sequelize } from 'sequelize-typescript';
import { Classrooms } from '../classes/class.model'
import { Students } from '../students/Student.model'
import ConfigService from "./config.service"
import { Module } from '@nestjs/common';

// const sequelize = require('sequelize');
// const db = new sequelize('some-postgres', 'liran', 'mysecretpassword', {
//   host: 'localhost',
//   dialect: 'postgres'
// });

// export {db, sequelize}


const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async (configService: ConfigService) => {
            const sequelize = new Sequelize(configService.sequelizeOrmConfig);
            sequelize.addModels([Classrooms, Students]);
            try{
                await sequelize.sync();
                console.log("success");
            } catch (e) {
                console.log("failed");
                
            }
            
            return sequelize;
        },
        inject: [ConfigService],
    },
];


@Module({
    providers: [...databaseProviders, ConfigService],
    exports: [...databaseProviders, ConfigService],
})
export class DataBaseModule {}
