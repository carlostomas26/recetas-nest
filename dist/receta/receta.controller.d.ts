import { RecetaService } from './receta.service';
export declare class RecetaController {
    private readonly recetaService;
    constructor(recetaService: RecetaService);
    listar(): Promise<import("./interface/receta.interface").Receta[]>;
    buscarPorId(id: string): Promise<import("./interface/receta.interface").Receta[]>;
}
