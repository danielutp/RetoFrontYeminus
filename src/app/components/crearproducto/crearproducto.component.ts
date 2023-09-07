import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/IProducto';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css']
})
export class CrearproductoComponent implements OnInit {

  producto: IProducto = {
    id: "",
    codigo: 0,
    descripcion: '',
    listaDePrecios: 0,
    imagen: '',
    productoParaLaVenta: false,
    porcentajeIva: 0
  };

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit() {
  }

  crearProducto() {
    this.appService.postCrearProducto(this.producto).subscribe();
    this.router.navigate(['/productos']);
  }
}
