import { Body, Controller, Post } from '@nestjs/common';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('register')
    create(@Body() usuarioDto: Usuario): Promise<Usuario>{
      return this.authService.register(usuarioDto);
    }

    @Post('login')
    login(@Body() usuarioDto: Usuario){
      return this.authService.login(usuarioDto);
      // return this.authService.login(createEmpleadoDto);
    }
  
}
