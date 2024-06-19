import { Injectable, NotFoundException } from '@nestjs/common';
import { StudentRepository } from './students.repository';
import { Students } from './student.model';


@Injectable()
export class StudentsService {
  constructor(private readonly studentRepository: StudentRepository) {}

  async insertStudent(id: number, data: {firstName: string, lastName: string, age: number, occupation: string, class: number}): Promise<Students> {
    const classroomData = new Students({id: id, firstName: data.firstName, lastName: data.lastName, age: data.age, occupation: data.occupation, class: data.class})
    return this.studentRepository.create(classroomData);
  }

  async getStudents(): Promise<Students[]> {
    return this.studentRepository.findAll();
  }

  async deleteStudent(id: number) {
    try{
      return this.studentRepository.delete(id);
    }
    catch (e) {
      throw new NotFoundException 
  }
}

removeFromClass(id: number) {
  try {
    return this.studentRepository.removeFromClass(id);
  }
  catch (e) {
    throw new NotFoundException
  }
}

addToClass(classId: number, studentId: number) {
  return this.studentRepository.addToClass(studentId, classId);
}

  async getStudent(id: number): Promise<Students> {
    try{
      return this.studentRepository.findById(id);
    }
    catch (e) {
      throw new NotFoundException
    }
  }
  
  async getStudentsForClass(id: number): Promise<Students[]> {
    return this.studentRepository.getStudentsForClass(id);
  }

  async removeClass(id: number) {
    return this.studentRepository.removeClass(id);
  }

}