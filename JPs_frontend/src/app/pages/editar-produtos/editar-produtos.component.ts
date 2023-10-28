import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from 'src/app/interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css'],
})
export class EditarProdutosComponent {
  enviado: boolean = false;
  id: string | null = null;

  produtoForm = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    codigoBarras: new FormControl('', [Validators.required]),
    preco: new FormControl(0, Validators.min(0.01)),
  });

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.produtosService.buscarPorId(Number(this.id)).subscribe(
      (produto: IProduto) => {
        console.log(produto);
        this.produtoForm.setValue({
          nome: produto.nome,
          codigoBarras: produto.codigoBarras,
          preco: produto.preco,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editar() {
    const data = { ...this.produtoForm.value, id: this.id };
    console.log(data);
  }
}
