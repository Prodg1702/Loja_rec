import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { Guid } from 'guid-typescript'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-detalhe-compra',
  templateUrl: './detalhe-compra.page.html',
  styleUrls: ['./detalhe-compra.page.scss'],
})
export class DetalheCompraPage implements OnInit {

  private produto : Produto
  public modoEdicao = false
  produtoForm : FormGroup

  constructor(
    public formBuilder : FormBuilder
  ) { }

  ngOnInit() {
    this.produto = {id: Guid.createEmpty(), nome: "", valor: "", quantidade: ""}
    this.produtoForm = this.formBuilder.group({
      id : [this.produto.id],
      nome : [this.produto.nome],
      valor : [this.produto.valor],
      quantidadde : [this.produto.quantidade]
    })
  }

}
