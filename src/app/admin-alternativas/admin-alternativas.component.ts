import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AlternativasService } from '../alternativas.service';
import { QuestoesService } from '../questoes.service';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sb-admin-alternativas',
  templateUrl: './admin-alternativas.component.html',
  styleUrls: ['./admin-alternativas.component.scss']
})
export class AdminAlternativasComponent implements OnInit {

  constructor(private questao$: QuestoesService ,private router: Router, private cadastro$:AlternativasService, private route: ActivatedRoute) { }
  alternativa: any;
  faEdit=faEdit;
  faTrash=faTrash;
  id='10';
  correta='0';
  params:any;
  error: any;
  tipo:any;
  alter:any;
  alternativas:object[]=[];
  questoesBanco:any;
  
  ngOnInit(): void {
    this.params=this.route.snapshot.paramMap.get('questao_id');
    this.questoesBanco=this.questao$.RetornaQuestoes(this.params).subscribe(
      dados => this.questoesBanco = dados,
    );
    console.log(this.questoesBanco)
      
  }

  enviar(){
    if(this.tipo){
      this.correta='1'
    }else{
      this.correta='0'
    }
    this.cadastro$.cadastrar(this.alternativa, parseInt(this.params), parseInt(this.correta))
          .subscribe(
            alternativa => {
              this.questoesBanco.alternativas.push(alternativa)
              this.alternativa='';
              
            },
            err => this.error = err.error
          );
  }
  finalizar(){
    this.router.navigate(['/admin']);
  }
  delete(id:any){
    this.questao$.DeletaQuestao(id).subscribe(
      dados => {
        this.router.navigate(['/inicio'])
        console.log(dados)
      },
      err=>this.error = err.error
    );
    
  }

}
