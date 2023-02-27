import {Component, OnInit} from '@angular/core';
import {IPensamento} from "../../pensamento.interface";
import {PensamentoService} from "../pensamento.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit{

  constructor(private service: PensamentoService, private router: Router) {
  }
  pensamento: IPensamento = {
   conteudo:'',
    autoria:'',
    modelo:''
  }
  ngOnInit():void {
  }

  salvar(){
    console.log(this.pensamento)
    this.service.create(this.pensamento).subscribe(()=>{
      this.router.navigate(['/pensamento'])
    })
  }

  cancelar(){
    this.router.navigate(['/pensamento'])
  }
}
