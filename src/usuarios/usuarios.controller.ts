import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';
import { UsuariosService } from './usuarios.service';

@Controller('usuarios')
export class UsuariosController {
    constructor(private empleadoService: UsuariosService) {}

    @Post()
    create(@Body() createEmpleadoDto: Usuario): Promise<Usuario>{
      
      return this.empleadoService.create(createEmpleadoDto);
    }
  
    @Get()
    findAll(): Promise<Usuario[]> {
      return this.empleadoService.findAll();
    }
  
    @Get(':username')
    findOne(@Param('username') user: string){
      return this.empleadoService.findOne(user);
    }
  
    @Delete(':username')
    remove(@Param('username') user: string){
      return this.empleadoService.remove(user);
    }
}
