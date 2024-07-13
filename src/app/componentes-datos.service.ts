import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Componente } from './componentes-pc-list/Componente';
import { IfStmt } from '@angular/compiler';

const URL = 'https://657b2edd394ca9e4af13ed64.mockapi.io/api/componentes';

@Injectable({
  providedIn: 'root'
})
export class ComponentesDatosService {
    
    
    constructor(private http: HttpClient) { }
    
    /**
     * Consume la API de componentes y devuelve un observable como respuesta
    */
   public obtenerTodo(): Observable<Componente[]> {
       
       return this.http.get<Componente[]>(URL)
       .pipe(
           tap((componentes: Componente[]) => componentes.forEach(componente => { 
               console.log(componente.imagen);
               
               componente.cantidad = 0
            }))
        );
    }

    public obtenerUno(id: number): Observable<Componente[]> {
        return this.http.get<Componente[]>(URL + "/" + id);
    }
/*
    public actualizarUnComponente(id: number, componente: Componente): void {
        this.http.put(URL + "/" + id, componente);
    }*/

        /**
         * No funciona
         */
    actualizarComponente(id: number, componenteActualizado: any): Observable<any> {
        let urlConId = `${URL}/${id}`;
        console.log(urlConId);
        const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.put(urlConId, componenteActualizado, { headers });
      }
}
