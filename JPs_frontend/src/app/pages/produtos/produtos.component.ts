import { Component } from '@angular/core';
import { IProduto } from 'src/app/interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css'],
})
export class ProdutosComponent {
  produtos: IProduto[] = [];
  produtosPaginado: IProduto[] = [];
  pagina: number = 1;
  ultimaPagina: number = 1;
  tamanhoPagina: number = 5;

  constructor(private produtosService: ProdutosService) {}

  ngOnInit() {
    this.produtosService.buscarTodos().subscribe(
      (produtos) => {
        this.produtos = produtos;
        this.paginar(this.pagina);
        this.ultimaPagina = Math.ceil(produtos.length / this.tamanhoPagina);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  paginar(pagina: number) {
    const indexFinal = pagina * this.tamanhoPagina;
    const indexInicial = indexFinal - this.tamanhoPagina;
    this.produtosPaginado = this.produtos.slice(indexInicial, indexFinal);
  }

  paginaProx() {
    if (this.pagina == this.ultimaPagina) return;
    this.pagina++;
    this.paginar(this.pagina);
  }

  paginaAnt() {
    if (this.pagina == 1) return;
    this.pagina--;
    this.paginar(this.pagina);
  }

  paginaX(pagina: number) {
    if (this.pagina == pagina) return;
    this.pagina = pagina;
    this.paginar(this.pagina);
  }
}
