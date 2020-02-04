import { Controller, Get, Param } from '@nestjs/common';
import { RecetaService } from './receta.service';

@Controller('receta')
export class RecetaController {

    constructor(private readonly recetaService: RecetaService) {}

    @Get()
    async listar() {
        return this.recetaService.listar();
    }

    @Get(':id')
    buscarPorId(@Param('id') id: string) {
        return this.recetaService.buscarPorId(id);
    }
}
