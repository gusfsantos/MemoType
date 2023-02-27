import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CabecalhoComponent} from './cabecalho/cabecalho.component';
import {RodapeComponent} from './rodape/rodape.component';
import {CriarPensamentosComponent} from './pensamentos/criar-pensamentos/criar-pensamentos.component';
import {FormsModule} from "@angular/forms";
import {ListarPensamentoComponent} from './pensamentos/listar-pensamento/listar-pensamento.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {PensamentoComponent} from './pensamentos/pensamento/pensamento.component';
import {HttpClientModule} from "@angular/common/http";
import { ExcluirPensamentoComponent } from './pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './pensamentos/editar-pensamento/editar-pensamento.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    CriarPensamentosComponent,
    ListarPensamentoComponent,
    PensamentoComponent,
    ExcluirPensamentoComponent,
    EditarPensamentoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterOutlet, AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
