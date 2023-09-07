export interface IProducto {
  id?: number,
  codigo: number,
  descripcion: string,
  listaDePrecios: number,
  imagen: string,
  productoParaLaVenta: boolean,
  porcentajeIva: number
}
