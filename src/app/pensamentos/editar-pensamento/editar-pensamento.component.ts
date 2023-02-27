import {Component, OnInit} from '@angular/core';
import {IPensamento} from "../../pensamento.interface";
import {PensamentoService} from "../pensamento.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {
  constructor(private service: PensamentoService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  pensamento: IPensamento = {
    id: 0,
    conteudo: '',
    modelo: '',
    autoria: ''
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.getOne(parseInt(id!)).subscribe((pensamento) => this.pensamento = pensamento)
  }

  editar() {
    this.service.edit(this.pensamento).subscribe(() => this.router.navigate(['/pensamento']))
  }

  cancelar() {
    this.router.navigate(['/pensamento'])
  }
}
