import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  enviar() {
    this.enviado = true;
    const data = this.produtoForm.value;
    console.log(data);
  }
}
