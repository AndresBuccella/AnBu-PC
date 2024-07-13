import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarritoComprasService } from '../carrito-compras.service';
import { Componente } from '../componentes-pc-list/Componente';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.scss'
})
export class CarritoComponent implements OnInit {
    
    @Input()
    componentes: Componente[] = [];
    
    @Output()
    componentesChange: EventEmitter<Componente[]> = new EventEmitter<Componente[]>();
    
    listaDeCompra$: Observable<Componente[]> = new Observable();
    constructor(private carrito: CarritoComprasService){
        this.listaDeCompra$ = this.carrito.carritoCompras.asObservable();
    }
    
    ngOnInit(): void { }
    
    carritoEstaVacio():boolean{
        return this.carrito.carritoEstaVacio();
    }
    
    quitarDelCarrito(id: number, componentes: Componente[]): void {
        this.carrito.quitarDelCarrito(id, componentes);
    }

    devolverTodo(componentes: Componente[]) {
        this.carrito.devolverTodo(componentes);
    }
    confirmarCompra(componentes: Componente[]){
        this.carrito.confirmarCompra(componentes);
    }
}