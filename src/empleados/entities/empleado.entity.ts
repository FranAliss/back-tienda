import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import {Pedido} from "../../pedidos/entities/pedido.entity"

@Entity()
export class Empleado {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  rol: string;
  @Column()
  genero: string;
  @OneToMany(()=> Pedido, (pedido)=>pedido.empleado)
  pedidos: Pedido[]
}