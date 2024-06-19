import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  
  import { StudentsService } from './students.service';
  
  @Controller('Students')
  export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}
  
    @Post()
    addStudent(
      @Body('data') data: {firstName: string, lastName: string, age: number, occupation: string, class: number},
    ) {
      const studentId = Math.floor(Math.random() *1000)
      this.studentsService.insertStudent(
        studentId,
        data
      );
    }
  
    @Get()
    getAllStudents() {
      return this.studentsService.getStudents();
    }

    @Get(':id')
    getClass(
      @Param('id') id: number
    ) {
      this.studentsService.getStudent(id)
    }

    @Patch()
    removeStudent(
      @Body('id') id: number,
    ) {
      this.studentsService.removeFromClass(id);
      return null;
    }

  
    @Delete()
    deleteStudent(@Body('id') studentId: number) {
        this.studentsService.deleteStudent(studentId);
        return null;
    }

    @Post(':studentId')
    addToClass(
      @Param('studentId') studentId: number,
      @Body('classId') classId: number
    ) {
      this.studentsService.addToClass(classId, studentId);
    }
  }