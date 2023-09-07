import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncriptarComponent } from './components/encriptar/encriptar.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  { path: 'encriptar', component: EncriptarComponent },
  { path: 'productos', component: ProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
