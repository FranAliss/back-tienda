import { Module } from '@nestjs/common';
import { EmpleadoService } from './empleados.service';
import { EmpleadosController } from './empleados.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empleado } from './entities/empleado.entity';
import {Pedido} from "../pedidos/entities/pedido.entity"
import { AuthService } from 'src/auth/auth.service';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { JwtModule } from '@nestjs/jwt';


@Module({
  providers: [EmpleadoService],
  controllers: [EmpleadosController],
  imports:[TypeOrmModule.forFeature([Empleado, Pedido])]
})
export class EmpleadosModule {}
