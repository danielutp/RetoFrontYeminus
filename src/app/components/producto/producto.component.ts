import { Component, OnInit } from '@angular/core';
import { IProducto } from 'src/app/interfaces/IProducto';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  producto: IProducto[] = [];
  activatedRoute: any;

  constructor(private appService: AppService) {
    this.producto = [];
  }

  ngOnInit() {
    this.appService.getProduct().subscribe((product) => {
      this.producto = product
    });
  }

  borrarProducto(producto: IProducto) {
    this.appService.deleteProducto(producto).subscribe();
  }

  editarProducto() {
  }
}
