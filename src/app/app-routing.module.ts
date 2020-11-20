import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminQuestoesComponent } from './admin-questoes/admin-questoes.component';
import { AdminAlternativasComponent } from './admin-alternativas/admin-alternativas.component'
import {LoginComponent} from './login/login.component'
import { QuestoesComponent } from './questoes/questoes.component';
import {ResponderQuestoesComponent} from './responder-questoes/responder-questoes.component'

const routes: Routes = [
    { path: 'cadastrar/questao', component: AdminQuestoesComponent },
    { path: 'alternativa/:questao_id', component: AdminAlternativasComponent },
    { path: 'login/admin', component: LoginComponent },
    { path: 'inicio', component: QuestoesComponent},
    { path: 'responder/:questao_id', component: ResponderQuestoesComponent},
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login/admin',
    },
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
