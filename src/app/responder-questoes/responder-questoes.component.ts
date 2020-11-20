import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { QuestoesService } from '../questoes.service';
import { AlternativasService } from '../alternativas.service';
import { HttpParams } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'sb-responder-questoes',
  templateUrl: './responder-questoes.component.html',
  styleUrls: ['./responder-questoes.component.scss']
})
export class ResponderQuestoesComponent implements OnInit {
  questoesBanco: any;
  params:any;
  alternativa:any;
  status:any;
  usu_hash: any;
  exe_hash: any;
  alternativa_id:number;
  timer=10;
  //isDisabled: boolean;

  constructor(private questao$: QuestoesService ,
    private router: Router,
    private alternativa$:AlternativasService,
    private route: ActivatedRoute,){
    this.usu_hash = this.getParamValueQueryString('usu_hash');
    this.exe_hash = this.getParamValueQueryString('exe_hash');
    this.alternativa_id = this.route.snapshot.params.argument_id; }
  
  ngOnInit(): void {
    this.params=this.route.snapshot.paramMap.get('questao_id');
    this.questoesBanco=this.questao$.RetornaQuestoes(this.params).subscribe(
      dados => this.questoesBanco = dados,
    );
    console.log(this.questoesBanco)
  }
  seleciona(alternativa:any){
    this.alternativa=alternativa
  }
  getParamValueQueryString(paramName: any) {
    const url = window.location.href;
    let paramValue;
    if (url.includes('?')) {
      const httpParams = new HttpParams({ fromString: url.split('?')[1] });
      paramValue = httpParams.get(paramName);
    }
    return paramValue;
  }

  enviaResposta(){
    const data = {
      exe_hash: this.exe_hash,
      usx_completado: true,
      token: this.usu_hash,
      tempo_exercicio: this.timer
    }
    let cont= 0;
    console.log(data)
    if(this.alternativa == 1){
      data.usx_completado=true;
      cont+=1
    }
    else{
      if(cont==0){
      data.usx_completado=false;
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Resposta está incorreta. Tente novamente!',
        })
      }
    }
    this.questao$.sendResponse(data,data.token).then(res => {
        console.log(res)
        if (res.status == false && cont>0){
          Swal.fire({
          icon: 'info',
          title: 'Oops...',
          text: res.mensagem
          })}})
  }

}
