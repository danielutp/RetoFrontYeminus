import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEncriptar } from '../interfaces/IEncriptar';
import { IProducto } from '../interfaces/IProducto';
import { IFibonacciP } from '../interfaces/IFibonacciP';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  postEncriptar(frase: string): Observable<IEncriptar> {
    return this.http.post<IEncriptar>(`${environment.api}/encriptar`, { frase })
  }

  postDesencriptar(frase: string): Observable<IEncriptar> {
    return this.http.post<IEncriptar>(`${environment.api}/desencriptar`, { frase })
  }

  getProduct(): Observable<IProducto[]> {
    return this.http.get<IProducto[]>(`${environment.api1}`)
  }

  deleteProducto(producto: IProducto) {
    return this.http.delete<IProducto>(`${environment.api1}/${producto.id}`);
  }

  postFibonacci(numero: number): Observable<IFibonacciP> {
    return this.http.post<IFibonacciP>(`${environment.api2}/fibonaci`, { numero })
  }

  getProducto(id: string): Observable<IProducto> {
    return this.http.get<IProducto>(`${environment.api1}/${id}`);
  }

  putActualizarProducto(id: string, producto: IProducto): Observable<IProducto> {
    return this.http.put<IProducto>(
      `${environment.api1}/${id}`,
      producto
    );
  }

  postCrearProducto(producto: IProducto): Observable<IProducto> {
    return this.http.post<IProducto>(`${environment.api1}`, producto);
  }
}
