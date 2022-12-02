import { Empleado } from "src/empleados/entities/empleado.entity";

export class CreatePedidoDto {
    fecha: string;
    empleado: Empleado;
}
