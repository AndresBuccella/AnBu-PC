import { Injectable } from '@angular/core';
import { Componente } from './componentes-pc-list/Componente';
import { BehaviorSubject } from 'rxjs';
import { ComponentesDatosService } from './componentes-datos.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoComprasService {

    private _carritoCompras: Componente[] = []
    carritoCompras: BehaviorSubject<Componente[]> = new BehaviorSubject(this._carritoCompras);

    constructor(private datos: ComponentesDatosService) { }

    agregarAlCarrito(componente: Componente): boolean{
        
        if(componente.cantidad > 0 && (componente.stock - componente.cantidad) >= 0){
            //Encontrar en la lista el componente let item: Componente = this.carritoCompras.find((v1)=> v1.nombre == componente.nombre)
            let item: Componente | undefined = this._carritoCompras.find((c1)=> c1.nombre == componente.nombre);
            if(!item){
                //this.carritoCompras.push({ ... componente}); crea un nuevo componente IDENTICO y lo agrega
                this._carritoCompras.push({ ... componente})
            }else{
                item.cantidad += componente.cantidad;
            }
            this.carritoCompras.next(this._carritoCompras); //equivalente al emmit de eventos, avisa su estado
            return true;
        }
        return false;
    }

    quitarDelCarrito(id: number, componentes: Componente[]): void {
        let indiceCarrito: number = (this._carritoCompras.findIndex((componente)=> componente.id === id));
        let indiceComponente: number = (componentes.findIndex((componente)=> componente.id === id));
        componentes[indiceComponente].stock += this._carritoCompras[indiceCarrito].cantidad;
        this._carritoCompras.splice(indiceCarrito,1);
        this._carritoCompras.filter(componente => componente.id === id);
    }

    carritoEstaVacio(): boolean{
        return this._carritoCompras.length == 0;
    }

    devolverTodo(componentes: Componente[]){
        let arrId: number[] = [];
        this._carritoCompras.forEach(componente => arrId.push(componente.id));
        for (let i = 0; i < arrId.length; i++) {
            this.quitarDelCarrito(arrId[i], componentes);
        }
    }
    confirmarCompra(componentes: Componente[]){
        let arrId: number[] = [];
        this._carritoCompras.forEach(componente => arrId.push(componente.id));
        for (let i = 0; i < arrId.length; i++) {
            componentes.forEach(componente=>{
                if (componente.id === arrId[i]) {
                    this.datos.actualizarComponente(arrId[i], componente);
                }
            });
        }
    }
}