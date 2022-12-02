import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from 'src/items/entities/item.entity';
import { Empleado } from 'src/empleados/entities/empleado.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  fecha: string;

  @ManyToMany(() => Item, (Item) => Item.id,{
    cascade: true,
  })
  @JoinTable()
  items: Item[];

  @ManyToOne(() => Empleado, (empleado)=>empleado.pedidos)
  empleado:Empleado;
}