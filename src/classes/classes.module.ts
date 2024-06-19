import { Module } from '@nestjs/common';

import { ClassesController } from './classes.controller';
import { ClassesService } from './classes.service';
import { ClassRepository } from './classes.repository';
import { DataBaseModule } from 'src/providers/db.module';
import { StudentsModule } from 'src/students/students.module';

@Module({
    imports: [DataBaseModule, StudentsModule],
    controllers: [ClassesController],
    providers: [ClassesService, ClassRepository],
})
export class ClassesModule {}
