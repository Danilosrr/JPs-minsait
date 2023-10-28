import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProduto } from 'src/app/interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css'],
})
export class CadastrarProdutosComponent {;
  produtoForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.maxLength(100)]), //tamanho a ser definido
    codigoBarras: new FormControl('', [Validators.required, Validators.maxLength(100)]), //tamanho a ser definido
    preco: new FormControl(0.01, Validators.min(0.01)),
  });

  constructor(private produtosService: ProdutosService) {}

  enviar() {
    const produto = this.produtoForm.value as IProduto;
    this.produtosService.cadastrar(produto).subscribe(r=>{
      Swal.fire({
        title: 'Produto cadastrado',
        text: 'produto cadastrado com sucesso!',
        icon: 'success',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500,
      });
    },(error)=>{
      Swal.fire({
        title: 'Produto não cadastrado',
        text: 'erro status '+error.status,
        icon: 'error',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500,
      });
    });
  }
}
