import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Item } from './entities/item.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateItemDto } from './dto/create-item.dto';


@Injectable()
export class ItemsService {
    constructor(@InjectRepository(Item) private ItemsRepository: Repository<Item>) {
    }
    create(createItemsDto: CreateItemDto){
      return this.ItemsRepository.save(createItemsDto);
    }
    update(id: number, createItemsDto: CreateItemDto){
      return this.ItemsRepository.update(id,createItemsDto);
    }
    findOne(id: number){
     return this.ItemsRepository.findOneBy({id});
    }
    findAll(){
      return this.ItemsRepository.find();
    }
    delete(id: number){
       return this.ItemsRepository.delete(id);
    }
}