import { Injectable } from '@angular/core';
import { Componente } from './componentes-pc-list/Componente';
import { BehaviorSubject } from 'rxjs';
import { arrRemove } from 'rxjs/internal/util/arrRemove';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

    private _carritoCompras: Componente[] = []
    carritoCompras: BehaviorSubject<Componente[]> = new BehaviorSubject(this._carritoCompras);

    constructor() { }

    agregarAlCarrito(componente: Componente): boolean{
        //Encontrar en la lista el componente let item: Componente = this.carritoCompras.find((v1)=> v1.nombre == componente.nombre)
        //this.carritoCompras.push({ ... componente}); crea un nuevo componente IDENTICO y lo pasa
        
        if(componente.cantidad > 0 && (componente.stock - componente.cantidad) >= 0){
            let item: Componente | undefined = this._carritoCompras.find((c1)=> c1.nombre == componente.nombre);
            if(!item){
                this._carritoCompras.push({ ... componente})
            }else{
                item.cantidad += componente.cantidad;
            }
            this.carritoCompras.next(this._carritoCompras); //equivalente al emmit de eventos, avisa su estado
            return true;
        }
        return false;
    }

    quitarDelCarrito(id: number): void {
        this._carritoCompras.splice((this._carritoCompras.findIndex((componente)=> componente.id === id)),1);
        this._carritoCompras.filter(componente => componente.id === id);
        console.log(this._carritoCompras);
    }


}