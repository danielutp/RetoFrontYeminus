import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEncriptar } from '../interfaces/IEncriptar';
import { IProducto } from '../interfaces/IProducto';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url = "https://localhost:7004/api/Encriptacion"
  private url1 = "https://localhost:7004/api/controller"

  constructor(private http: HttpClient) { }

  postEncriptar(frase: string): Observable<IEncriptar> {
    return this.http.post<IEncriptar>(`${this.url}/encriptar`, { frase })
  }

  postDesencriptar(frase: string): Observable<IEncriptar> {
    return this.http.post<IEncriptar>(`${this.url}/desencriptar`, { frase })
  }

  getProduct(): Observable<IProducto[]> {
    return this.http.get<IProducto[]>(`${this.url1}`)
  }

  deleteProducto(producto: IProducto) {
    return this.http.delete<IProducto>(`${this.url1}/${producto.id}`);
  }
}
