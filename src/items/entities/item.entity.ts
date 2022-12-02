import { Pedido } from 'src/pedidos/entities/pedido.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, JoinTable } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nombre: string;
  @Column()
  precio: number;
  @ManyToMany(()=>Pedido, pedido => pedido.items,{
    cascade: true,
  })
  items: Item[];
}