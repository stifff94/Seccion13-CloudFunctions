import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
// ES6 Modules or TypeScript


// CommonJS


@Injectable({
  providedIn: 'root'
})
export class GameService {

  juegos: Game[]=[];
  constructor( private http: HttpClient) { }

  

  getnominados(){
    
    if(this.juegos.length > 0){
      console.log("desde cache");
      return of(
        this.juegos
      );
    }
    else{
      console.log("desde internet");
      return this.http.get<Game[]>(environment.url+"/api/goty").pipe(
        tap(
          juegos => this.juegos = juegos
        )
      );
    }
  }

  votarJuego( id: string){
    
    return this.http.post(environment.url+"/api/goty/"+id,[])
    .pipe(
      
      catchError(err => {
        console.log('error en la peticion');
        return of(err.error);
        
        
      } )
    )
  }
  
}
