import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}