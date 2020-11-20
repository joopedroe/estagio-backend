import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestoesComponent } from './questoes/questoes.component';
import { AdminQuestoesComponent } from './admin-questoes/admin-questoes.component';
import { AdminAlternativasComponent } from './admin-alternativas/admin-alternativas.component';
import{ LoginComponent } from './login/login.component';
import { ResponderQuestoesComponent } from './responder-questoes/responder-questoes.component'

@NgModule({
    declarations: [AppComponent, QuestoesComponent, AdminQuestoesComponent, AdminAlternativasComponent, LoginComponent, ResponderQuestoesComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, FontAwesomeModule,SweetAlert2Module.forRoot()],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
