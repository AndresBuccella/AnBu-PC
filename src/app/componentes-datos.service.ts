import { HttpClient } from '@angular/common/http';
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
}
