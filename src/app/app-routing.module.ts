import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncriptarComponent } from './components/encriptar/encriptar.component';
import { ProductoComponent } from './components/producto/producto.component';
import { FibonacciComponent } from './components/fibonacci/fibonacci.component';
import { EditarproductoComponent } from './components/editarproducto/editarproducto.component';
import { CrearproductoComponent } from './components/crearproducto/crearproducto.component';

const routes: Routes = [
  { path: 'encriptar', component: EncriptarComponent },
  { path: 'productos', component: ProductoComponent },
  { path: 'fibonacci', component: FibonacciComponent },
  { path: 'editarproducto', component: EditarproductoComponent },
  { path: 'crearproducto', component: CrearproductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
