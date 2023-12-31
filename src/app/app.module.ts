import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EncriptarComponent } from './components/encriptar/encriptar.component';
import { EditarproductoComponent } from './components/editarproducto/editarproducto.component';
import { ProductoComponent } from './components/producto/producto.component';
import { FibonacciComponent } from './components/fibonacci/fibonacci.component';
import { CrearproductoComponent } from './components/crearproducto/crearproducto.component';

@NgModule({
  declarations: [
    AppComponent,
    EditarproductoComponent,
    EncriptarComponent,
    ProductoComponent,
    FibonacciComponent,
    CrearproductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
