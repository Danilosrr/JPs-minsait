import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from 'src/app/interfaces/produto';
import { ProdutosService } from 'src/app/services/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css'],
})
export class EditarProdutosComponent {
  id: string | null = null;
  produtoForm = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.maxLength(100)]),
    codigoBarras: new FormControl('', [
      Validators.required,
      Validators.maxLength(100),
    ]),
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
    const produto = { ...this.produtoForm.value, id: Number(this.id) };
    console.log(produto);
    this.produtosService.editar(produto as IProduto).subscribe((r) => {
      Swal.fire({
        title: 'Produto editado',
        text: 'produto editado com sucesso!',
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
