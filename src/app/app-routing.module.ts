import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CriarPensamentosComponent} from "./pensamentos/criar-pensamentos/criar-pensamentos.component";
import {ListarPensamentoComponent} from "./pensamentos/listar-pensamento/listar-pensamento.component";
import {ExcluirPensamentoComponent} from "./pensamentos/excluir-pensamento/excluir-pensamento.component";
import {EditarPensamentoComponent} from "./pensamentos/editar-pensamento/editar-pensamento.component";

const routes: Routes =[
  {
    path:'',
    redirectTo:'pensamento',
    pathMatch:"full"
  },
  {
    path:'pensamento',
    component:ListarPensamentoComponent
  },
  {
    path:'pensamento/criar',
    component:CriarPensamentosComponent
  },
  {
    path:'pensamento/excluir/:id',
    component:ExcluirPensamentoComponent
  },
  {
    path:'pensamento/editar/:id',
    component:EditarPensamentoComponent
  }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule{}
