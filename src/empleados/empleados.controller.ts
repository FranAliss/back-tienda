import { Body, Controller, Get, Post, Param, Delete, Patch} from "@nestjs/common";
import { CreateEmpleadoDto } from "./dto/create-empleado.dto";
import { EmpleadoService } from "./empleados.service";
import { Empleado } from "./entities/empleado.entity";


@Controller('empleados')
export class EmpleadosController {
    constructor(private empleadoService: EmpleadoService) {}

    @Post()
    create(@Body() createEmpleadoDto: CreateEmpleadoDto): Promise<Empleado>{
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

    @Patch(':id')
    update(@Param('id') id: number, @Body() newEmpleado: CreateEmpleadoDto){
      return this.empleadoService.update(id, newEmpleado);
    }

}
