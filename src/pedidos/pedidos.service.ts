import { Injectable } from '@nestjs/common';
import { CreatePedidoDto } from './dto/create-pedido.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Pedido } from "./entities/pedido.entity";
import { Repository } from "typeorm";
import { Empleado } from 'src/empleados/entities/empleado.entity';
import { EmpleadoService } from 'src/empleados/empleados.service';


@Injectable()
export class PedidosService {
    constructor(@InjectRepository(Pedido) private PedidoRepository: Repository<Pedido>, private empleadoService: EmpleadoService) {
    }

    create(createpedidoDto: Pedido){
      return this.PedidoRepository.save(createpedidoDto);
    }
  
  
    findAll() { 
      return this.PedidoRepository.find({
          relations: {
              empleado: true,
          },
      });
    }
  
    findOne(Id: number): Promise<Pedido> {
      return this.PedidoRepository.findOne({ where: { id: Id}});
    }

    remove(Id: number): Promise<any> {
      return this.PedidoRepository.delete({id: Id});
    }

    update(id: number, newPedido: CreatePedidoDto) { 
      return this.PedidoRepository.update(id,newPedido);
    }
}
