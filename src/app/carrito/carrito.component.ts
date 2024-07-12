import { Component, OnInit } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';
import { Componente } from '../componentes-pc-list/Componente';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent implements OnInit {

    listaDeCompra$: Observable<Componente[]> = new Observable();

    constructor(private carrito: CarritoComprasService){
        this.listaDeCompra$ = this.carrito.carritoCompras.asObservable();
    }
    
    ngOnInit(): void { }
}