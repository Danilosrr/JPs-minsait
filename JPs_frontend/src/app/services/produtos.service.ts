import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduto } from '../interfaces/produto';
import { catchError } from 'rxjs';

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
    return this.http.post(this.api, produto).subscribe(r=>{console.log(r)});
  }
}
