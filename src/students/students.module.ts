import { Module } from '@nestjs/common';

import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { DataBaseModule } from 'src/providers/db.module';
import { StudentRepository } from './students.repository';

@Module({
    imports: [DataBaseModule],
    controllers: [StudentsController],
    providers: [StudentsService, StudentRepository],
    exports: [StudentsService, StudentRepository]
})
export class StudentsModule {}
