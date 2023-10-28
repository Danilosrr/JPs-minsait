import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from 'src/app/interfaces/produto';

@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css'],
})
export class CadastrarProdutosComponent {
  enviado: boolean = false;
  id: string | null = null;
  produtoForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    codigoBarras: new FormControl('', [Validators.required]),
    preco: new FormControl(0, Validators.min(0.01)),
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  enviar() {
    this.enviado = true;
    if (this.id) {
      this.editar();
    } else {
      const data = this.produtoForm.value;
      console.log(data);
    }
  }

  editar() {
    const data = { ...this.produtoForm.value, id: 2 };
    console.log(data);
  }
}
