import { Component, OnInit } from '@angular/core';
import { IProducto } from 'src/app/interfaces/IProducto';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  producto: IProducto[] = [];
  activatedRoute: any;

  constructor(private router: Router, private appService: AppService) {
    this.producto = [];
  }

  ngOnInit() {
    this.appService.getProduct().subscribe((product) => {
      this.producto = product
    });
  }

  borrarProducto(producto: IProducto) {
    this.appService.deleteProducto(producto).subscribe();
    location.reload();
  }

  editarProducto(producto: IProducto) {
    console.log(producto)
    localStorage.setItem('id', String(producto.id));
    this.router.navigate(['/editarproducto']);
  }
}

