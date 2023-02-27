import {Component, OnInit} from '@angular/core';
import {IPensamento} from "../../pensamento.interface";
import {PensamentoService} from "../pensamento.service";

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  constructor(private service: PensamentoService) {
  }

  listarPensamentos: IPensamento[] = []

  ngOnInit() {
    this.service.getMany().subscribe((pensamentos) => {
      this.listarPensamentos = pensamentos
    })
  }
}
