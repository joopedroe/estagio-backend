import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { QuestoesService } from '../questoes.service';

@Component({
  selector: 'sb-admin-questoes',
  templateUrl: './admin-questoes.component.html',
  styleUrls: ['./admin-questoes.component.scss']
})
export class AdminQuestoesComponent implements OnInit {

  constructor(private router: Router, private cadastro$:QuestoesService) { }
  descricao: any;
  imagem=null;
  questao: any;
  error: any;
  return:any;
  
  ngOnInit(): void {
  }

  enviar(){
    
    this.cadastro$.cadastrar(this.descricao, this.imagem)
          .subscribe(
            questaoResturn => {
              this.return=questaoResturn
              console.log(this.return)
              this.router.navigate([`alternativa/${this.return.id}`]);
            },
            err => this.error = err.error
          );
          
    
  }

}
