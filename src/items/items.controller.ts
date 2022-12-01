import { Controller, Body, Delete,Get, Param,Post, Put } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService){
    }
    @Get()
    findall(){
        return this.itemsService.findAll();
    }
    @Post()
    create(@Body() createItemDto: CreateItemDto){
    return this.itemsService.create(createItemDto);
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.itemsService.findOne(+id);
    } 
    @Delete(':id')
    delete(@Param('id') id: string){
        return this.itemsService.delete(+id);
    }
    @Put(':id')
    update(@Param('id') id: string,@Body() createItemsDto: CreateItemDto){
        return this.itemsService.update(+id,createItemsDto);
  }
}

