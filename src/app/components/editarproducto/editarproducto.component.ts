import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProducto } from 'src/app/interfaces/IProducto';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-editarproducto',
  templateUrl: './editarproducto.component.html',
  styleUrls: ['./editarproducto.component.css']
})
export class EditarproductoComponent implements OnInit {

  producto: IProducto = {
    id: "",
    codigo: 0,
    descripcion: '',
    listaDePrecios: 0,
    imagen: '',
    productoParaLaVenta: false,
    porcentajeIva: 0
  };

  constructor(
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = (localStorage.getItem('id')!);
    this.appService.getProducto(id).subscribe((res) => {
      this.producto = res;
    });
  }

  modificarEquipo() {
    const id = (localStorage.getItem('id')!);
    this.appService.putActualizarProducto(id, this.producto).subscribe();
    this.router.navigate(['/productos']);
  }
}
