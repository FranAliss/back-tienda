import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable, OneToMany } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  precio: number;
  @OneToMany(()=>Pedido, pedido => pedido.items,{
    cascade: true,
  })
  pedidos: Pedido[];
}