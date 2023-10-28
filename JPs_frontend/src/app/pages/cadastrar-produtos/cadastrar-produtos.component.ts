import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduto } from 'src/app/interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css'],
})
export class CadastrarProdutosComponent {
  enviado: boolean = false;
  produtoForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    codigoBarras: new FormControl('', [Validators.required]),
    preco: new FormControl(0, Validators.min(0.01)),
  });

  constructor(private produtosService: ProdutosService) {}

  enviar() {
    this.enviado = true;
    if (this.produtoForm.valid) {
      const produto = this.produtoForm.value as IProduto;
      this.produtosService.cadastrar(produto);
    }
  }
}
