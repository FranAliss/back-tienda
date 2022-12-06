import { HttpException, Injectable } from '@nestjs/common';
import { UsuariosService } from '../usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { hash, compare } from 'bcrypt';


@Injectable()
export class AuthService {
  constructor(private usersService: UsuariosService,
    private jwtService: JwtService) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(usuario: Usuario){
    const { password } = usuario;
    if (password != undefined){
      const plainToHASH = await hash(password, 10);
      usuario = {...usuario, password:plainToHASH};
      return this.usersService.create(usuario);
    }
  }

  async login(usuarioLogin: Usuario){
    const {username, password} = usuarioLogin;
    const findUsuario = await this.usersService.findOne(username)
    if (!findUsuario) throw new HttpException("Usuario Incorrecto",404)
    const checkPass = await compare(password, findUsuario.password);
    if (!checkPass ) throw new HttpException("Contraseña Incorrecta",403)
    
    const payload = {name:findUsuario.username }
    const token = this.jwtService.sign(payload);
    
    const data = {
      usuario: findUsuario, token};
    return data;
  }

  
}