import { Component } from '@angular/core';
import { Componente } from './Componente';
import { CarritoComprasService } from '../carrito-compras.service';
import { ComponentesDatosService } from '../componentes-datos.service';

@Component({
  selector: 'app-componentes-pc-list',
  templateUrl: './componentes-pc-list.component.html',
  styleUrl: './componentes-pc-list.component.scss'
})

export class ComponentesPcListComponent {


    componentes: Componente[] = [];

    constructor(private carrito: CarritoComprasService, private datos: ComponentesDatosService){ }

    ngOnInit(): void{ 
        this.datos.obtenerTodo()
        .subscribe(componentes => this.componentes = componentes);// con el pipe async se desuscribe solo
    }

    maximoAlcanzado(m: string){
        alert(m)
    }

    agregarAlCarrito(componente: Componente){
        if(this.carrito.agregarAlCarrito(componente)){
            componente.stock -= componente.cantidad;
            componente.cantidad = 0;
        }
    }
}
