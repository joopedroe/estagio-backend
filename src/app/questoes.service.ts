import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestoesService {

  constructor(private http:HttpClient) { }

  cadastrar(descricao:any,imagem:any) {
    const questao = {
      descricao,
      imagem
    };
    return this.http.post(environment.API_URL.concat('questoes/'), questao)
      .pipe(
        tap(questao => {
          localStorage.setItem('user', JSON.stringify(questao));
        })
      );
  }

  RetornaQuestoes(id:any){
    return this.http.get(environment.API_URL.concat(`questoes/${id}/alternativas`));
  }
  RetornaTodasQuestoes(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })}
    return this.http.get(environment.API_URL.concat('questoes/todas'),httpOptions).toPromise();
  }
  DeletaQuestao(id:any){
    return this.http.delete(environment.API_URL.concat(`questoes/${id}/excluir`));
  }
  sendResponse(data:any,token:any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer a1247dd2519ac04a602927fe04bcb129zJyrGtrrr3JMpjRWfnKjWnLfxbbKfcrJY62j5Nekmb98OMX7eY37DYrWyw/A1CB8'
    })
    }
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer '+token)
    return this.http.post('https://api.thelogiclive.com/api/v1/respostas', data, httpOptions).toPromise();
  }
}
