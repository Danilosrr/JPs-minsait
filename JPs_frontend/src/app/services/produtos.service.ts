import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduto } from '../interfaces/produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  api = 'http://localhost:8080/api/produtos';
  constructor(private http: HttpClient) {}

  buscarTodos() {
    return this.http.get<IProduto[]>(this.api);
  }

  buscarPorId(id:number) {
    return this.http.get<IProduto>(this.api+`/${id}`);
  }
}
