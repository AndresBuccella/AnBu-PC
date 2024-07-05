import { Component } from '@angular/core';
import { Componente } from './Componente';

@Component({
  selector: 'app-componentes-pc-list',
  templateUrl: './componentes-pc-list.component.html',
  styleUrl: './componentes-pc-list.component.scss'
})
export class ComponentesPcListComponent {

    componente: Componente = {
        imagen: "",
        nombre: "",
        fabricante: "",
        precio: 0,
        stock: 0,
    };
    componente2: Componente = {
        imagen: "",
        nombre: "",
        fabricante: "",
        precio: 0,
        stock: 0,
    };
    componente3: Componente = {
        imagen: "",
        nombre: "",
        fabricante: "",
        precio: 0,
        stock: 0,
    };

    componentes: Componente[] = [this.componente, this.componente2, this.componente3];

}
