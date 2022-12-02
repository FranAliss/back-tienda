import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleados.service';
import { EmpleadosController } from './empleados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';
import {Pedido} from "../pedidos/entities/pedido.entity"


@Module({
  providers: [EmpleadoService],
  controllers: [EmpleadosController],
  imports:[TypeOrmModule.forFeature([Empleado, Pedido])]
})
export class EmpleadosModule {}
