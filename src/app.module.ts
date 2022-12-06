import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpleadosModule } from './empleados/empleados.module';
import { PedidosModule } from './pedidos/pedidos.module';
import { ItemsModule } from './items/items.module';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuariosModule } from './usuarios/usuarios.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'db_tienda',
      synchronize: true,
      autoLoadEntities: true,
    }),
    EmpleadosModule, PedidosModule, ItemsModule, UsuariosModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
