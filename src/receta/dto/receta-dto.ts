export class RecetaDto {
    readonly titutlo: string;
    readonly comensales: number;
    readonly preparacion: number;
    readonly coccion: number;
    readonly descripcion: string;
    readonly imagen: string;
    readonly elementos: {
        readonly ingrediente: string;
        readonly cantidad: number;
        readonly unidad: number;
    };
}
