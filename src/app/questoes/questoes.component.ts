import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from '../login.service';
import { QuestoesService } from '@app/questoes.service';
import { async } from '@angular/core/testing';
import {Questao} from '../models/Questao'
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sb-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.scss']
})
export class QuestoesComponent implements OnInit {
  user=''
  questoesBanco:any;
  erro: any;
  faAd=faPlus;
  constructor(private router: Router, private login$:LoginService , private questoes$:QuestoesService) { }

  ngOnInit(): void {
    this.user = this.login$.user();
    if (this.user) {
      this.questoes$.RetornaTodasQuestoes().then(
        dados=>{
          this.questoesBanco=dados
        }
      )
    } else {
      this.router.navigate(['/login']);
    }
  }
  logout() {
    this.login$.logout();
    this.router.navigate(['/']);
  }
}
