import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
    constructor(@InjectRepository(Usuario) private EmpleadoRepository: Repository<Usuario>) {
    }
    create(createEmpleadoDto: Usuario){
      return this.EmpleadoRepository.save(createEmpleadoDto);
    }
  
    findAll() {
      return this.EmpleadoRepository.find()
    }
  
    findOne(Id: string){
      return this.EmpleadoRepository.findOne({ where: { username: Id}});
    }

    remove(Id: string): Promise<any> {
      return this.EmpleadoRepository.delete({username: Id});
    }

    // update(id: number, newEmpleado: CreateEmpleadoDto) { 
    //   return this.EmpleadoRepository.update(id,newEmpleado);
    // }
}
