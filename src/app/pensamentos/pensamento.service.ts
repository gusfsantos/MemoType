import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IPensamento} from "../pensamento.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  urlAPI:string= 'http://localhost:3000/pensamentos'
  constructor(private readonly http: HttpClient) { }

  getMany(): Observable<IPensamento[]>{
    return this.http.get<IPensamento[]>(this.urlAPI)
  }

  create(pensamento: IPensamento):Observable<IPensamento>{
    return this.http.post<IPensamento>(this.urlAPI, pensamento)
  }

  delete(id:number): Observable<IPensamento>{
    const url=`${this.urlAPI}/${id}`
    return this.http.delete<IPensamento>(url)
  }

  getOne(id:number): Observable<IPensamento>{
    const url=`${this.urlAPI}/${id}`
    return this.http.get<IPensamento>(url)
  }
  edit(pensamento: IPensamento): Observable<IPensamento>{
    const url=`${this.urlAPI}/${pensamento.id}`
    return this.http.put<IPensamento>(url, pensamento)
  }
}
