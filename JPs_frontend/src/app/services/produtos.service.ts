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

  buscarPorId(id: number) {
    return this.http.get<IProduto>(this.api + `/${id}`);
  }

  cadastrar(produto: Omit<IProduto, 'id'>) {
    return this.http.post(this.api, produto);
  }

  editar(produto: IProduto) {
    return this.http.put(this.api, produto);
  }

  deletar(id:number) {
    return this.http.delete(this.api+`/${id}`)
  }
}
