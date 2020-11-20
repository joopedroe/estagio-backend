import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlternativasService {

  constructor(private http:HttpClient) { }

  cadastrar(descricaoAlternativa:any,questoes_idquestoes:any, tipo:any) {
    const alternativa = {
      descricaoAlternativa,
      questoes_idquestoes,
      tipo
    };
    console.log(alternativa)
    return this.http.post(environment.API_URL.concat('alternativas/'), alternativa)
      .pipe(
        tap(alternativa => {
          localStorage.setItem('user', JSON.stringify(alternativa));
        })
      );
  }

  validaAlternativa(id:any){
    return this.http.get(environment.API_URL.concat(`alternativa/${id}/resposta`));
    console.log(id)
  }
}
