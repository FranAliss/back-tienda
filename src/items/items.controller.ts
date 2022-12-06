import { Controller, Body, Delete,Get, Param,Post, Put, UseGuards } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { AuthGuard } from "@nestjs/passport";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { ApiBearerAuth, ApiTags} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('items')
@Controller('items')
export class ItemsController {
    constructor(private itemsService: ItemsService){
    }
    @Get()
    findall(){
        return this.itemsService.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createItemDto: CreateItemDto){
    return this.itemsService.create(createItemDto);
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.itemsService.findOne(+id);
    }
    
    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    delete(@Param('id') id: string){
        return this.itemsService.delete(+id);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':id')
    update(@Param('id') id: string,@Body() createItemsDto: CreateItemDto){
        return this.itemsService.update(+id,createItemsDto);
  }
}

