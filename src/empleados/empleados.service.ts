import { Injectable } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Empleado } from "./entities/empleado.entity";
import { Repository } from "typeorm";

@Injectable()
export class EmpleadoService {
    constructor(@InjectRepository(Empleado) private EmpleadoRepository: Repository<Empleado>) {
    }
    create(createEmpleadoDto: CreateEmpleadoDto){
      return this.EmpleadoRepository.save(createEmpleadoDto);
    }
  
    findAll() {
      return this.EmpleadoRepository.find();
    }
  
    findOne(Id: number): Promise<Empleado> {
      return this.EmpleadoRepository.findOne({ where: { id: Id}});
    }

    remove(Id: number): Promise<any> {
      return this.EmpleadoRepository.delete({id: Id});
    }

    update(id: number, newEmpleado: CreateEmpleadoDto) { 
      return this.EmpleadoRepository.update(id,newEmpleado);
    }
}
