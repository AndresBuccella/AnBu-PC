import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesPcListComponent } from './componentes-pc-list/componentes-pc-list.component';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { PcsArmadasComponent } from './pcs-armadas/pcs-armadas.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { FormsModule } from '@angular/forms';
import { CarritoComponent } from './carrito/carrito.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesPcListComponent,
    AcercaDeComponent,
    PcsArmadasComponent,
    InputIntegerComponent,
    CarritoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
      provideHttpClient(
          withFetch(),
      ),
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
