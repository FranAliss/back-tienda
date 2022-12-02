import { Module } from '@nestjs/common';
import { PedidosController } from './pedidos.controller';
import { PedidosService } from './pedidos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './entities/pedido.entity';
import { Empleado } from 'src/empleados/entities/empleado.entity';
import { EmpleadoService } from 'src/empleados/empleados.service';

@Module({
  controllers: [PedidosController],
  providers: [PedidosService, EmpleadoService],
  imports:[TypeOrmModule.forFeature([Pedido, Empleado])]

})
export class PedidosModule {}
