import { Body, Controller, Get, Post, Param, Delete, Patch, Put} from "@nestjs/common";
import { Empleado } from "src/empleados/entities/empleado.entity";
import { CreatePedidoDto } from "./dto/create-pedido.dto";
import { Pedido } from "./entities/pedido.entity";
import { PedidosService } from './pedidos.service';

@Controller('pedidos')
export class PedidosController {
    constructor(private pedidoService: PedidosService) {}

    @Post()
    create(@Body() createPedidoDto: Pedido): Promise<Pedido>{
      return this.pedidoService.create(createPedidoDto);
    }
  
    @Get()
    findAll(): Promise<Pedido[]> {
      return this.pedidoService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number){
      return this.pedidoService.findOne(id);
    }
    @Delete(':id')
    remove(@Param('id') id: number){
      return this.pedidoService.remove(id);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() newPedido: CreatePedidoDto){
      return this.pedidoService.update(id, newPedido);
    }
}
