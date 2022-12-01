import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Item } from 'src/items/entities/item.entity';
import { Empleado } from 'src/empleados/entities/empleado.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  fecha: string;

  @OneToMany(() => Item, (Item) => Item.id)
  items:Item[];

  @OneToOne(() => Empleado)
  @JoinColumn()
  empleado:Empleado;
}