import { Injectable } from '@angular/core';
import { Componente } from './componentes-pc-list/Componente';
import { BehaviorSubject } from 'rxjs';

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
        
        if(componente.cantidad > 0){
            let item: Componente | undefined = this._carritoCompras.find((c1)=> c1.nombre == componente.nombre);
            if(!item){
                this._carritoCompras.push({ ... componente})
            }else{
                item.cantidad += componente.cantidad;
            }
            console.log(this._carritoCompras.length);
            this.carritoCompras.next(this._carritoCompras); //equivalente al emmit de eventos, avisa su estado
            return true;
        }
        return false;
    }
}