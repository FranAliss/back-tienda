import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { UsuariosModule } from 'src/usuarios/usuarios.module';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { jwtConstant } from './jwt.constant';
import { JwtStrategy } from './jwt.startegy';

@Module({
  imports: [UsuariosModule, 
    PassportModule, 
    TypeOrmModule.forFeature([Usuario]),
    JwtModule.register({
      secret: jwtConstant.secret,
      signOptions: { expiresIn: '30m' }})],
  providers: [AuthService, UsuariosService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
