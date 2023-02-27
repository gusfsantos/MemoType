import {Component, OnInit} from '@angular/core';
import {IPensamento} from "../../pensamento.interface";
import {PensamentoService} from "../pensamento.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.css']
})
export class ExcluirPensamentoComponent implements OnInit {
  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute) {
  }

  pensamento: IPensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getOne(parseInt(id!)).subscribe((pensamento)=>this.pensamento=pensamento)
  }

  excluirPensamento() {
    console.log(this.pensamento)
    if(this.pensamento.id)
      this.service.delete(this.pensamento.id).subscribe(()=> this.router.navigate(['/pensamento']))
  }

  cancelar() {
    this.router.navigate(['/pensamento'])
  }
}
