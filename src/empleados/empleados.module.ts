import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleados.service';
import { EmpleadosController } from './empleados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';

@Module({
  providers: [EmpleadoService],
  controllers: [EmpleadosController],
  imports:[TypeOrmModule.forFeature([Empleado]), EmpleadosModule]
})
export class EmpleadosModule {}
