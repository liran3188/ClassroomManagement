import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  
  import { ClassesService } from './classes.service';
  
  @Controller('Classes')
  export class ClassesController {
    constructor(private readonly classesService: ClassesService) {}
  
    @Post()
    addClass(
      @Body('data') data: {name: string, capacity: number}
    ) {
      const classId = Math.floor(Math.random() *1000)
      this.classesService.insertClass(
        classId,
        data
      );
    }
  
    @Get()
    getAllClasses() {
      return this.classesService.getClasses();
    }

    @Get(':id')
    getClass(
      @Param('id') id: number
    ) {
      this.classesService.getClass(id)
    }

    @Get()
    getStudents(
        @Body('id') classId: number
    ) {
        this.classesService.getStudents(classId);
    }
  
    @Delete()
    removeClass(@Body('id') classId: number) {
        this.classesService.deleteClass(classId);
        return null;
    }
  }