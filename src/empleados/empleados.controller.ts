import { Body, Controller, Get, Post, Param, Delete, Put, UseGuards} from "@nestjs/common";
import { CreateEmpleadoDto } from "./dto/create-empleado.dto";
import { EmpleadoService } from "./empleados.service";
import { Empleado } from "./entities/empleado.entity";
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { ApiBearerAuth, ApiTags} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('empleados')
@UseGuards(JwtAuthGuard)
@Controller('empleados')
export class EmpleadosController {
    constructor(private empleadoService: EmpleadoService) {}

    @Post()
    create(@Body() createEmpleadoDto: Empleado): Promise<Empleado>{
      return this.empleadoService.create(createEmpleadoDto);
    }
  
    @Get()
    findAll(): Promise<Empleado[]> {
      return this.empleadoService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number){
      return this.empleadoService.findOne(id);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number){
      return this.empleadoService.remove(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() newEmpleado: CreateEmpleadoDto){
      return this.empleadoService.update(id, newEmpleado);
    }

}
