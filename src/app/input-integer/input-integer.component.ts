import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PatternValidator, ValueChangeEvent } from '@angular/forms';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit {

    @Input()
    cantidad: number = 0;
    @Input()
    max: number = 0;

    @Output()
    cantidadChange: EventEmitter<number> = new EventEmitter<number>();
    @Output()
    maximoAlcanzado: EventEmitter<string> = new EventEmitter<string>();

    constructor(){  }

    ngOnInit(): void{}

    aumentarCantidad(): void{
        if(this.cantidad < 0){
            this.restaurarCantidad();
            return;
        }
        if(this.cantidad >= this.max){
            this.cantidad = this.max;
            return;
        }
        this.cantidad++;
        this.cantidadChange.emit(this.cantidad);
    }

    restaurarCantidad(){
        this.cantidad = 0;
        this.cantidadChange.emit(this.cantidad);
    }

    disminuirCantidad(): void{
        if(this.cantidad <= 0){
            this.restaurarCantidad();
            return;
        }
        this.cantidad--;
        this.cantidadChange.emit(this.cantidad);
    }

/*  
    cambioCantidad($event: KeyboardEvent): void{ }
   Arreglar
*/
 /**/   
    cambioCantidad($event: KeyboardEvent): void{
        if(this.isInteger($event.key)){
            if(this.cantidad > 0 && this.cantidad <= this.max){
                this.cantidadChange.emit(this.cantidad);
            }else{
                console.log("Fuera del stock disponible");
            }
        }else if( $event.key == "Backspace"){
            if (this.cantidad) {
                let aux: string = this.cantidad.toString();
                aux = aux.slice(0, (aux.length));
                this.cantidadChange.emit(parseInt(aux));
            }
            else{
                this.restaurarCantidad();
            }
        }
    }
    isInteger(key: string): boolean {
        return /^[0-9]*$/.test(key);
    }
}
